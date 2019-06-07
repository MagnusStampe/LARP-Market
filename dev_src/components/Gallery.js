//Components

//###
//# EKSTRA KOMMENTARER
//# ALT MED //# FORAN SLETTES INDEN PRODUCTION
//###

//# Hent andre komponenter eller udvidelser
import GalleryItem from './GalleryItem';
import GalleryMenu from './GalleryMenu';
import LoadSymbol from './LoadSymbol';

'use strict';

const e = React.createElement;

//# Selve React komponentet
class Gallery extends React.Component {
    //# State er en af det vigtigste værktøjer i React.
    //# State kan ændres i koden. Ændre state sig opdateres komponentet
    state = {
        json: null,
        jsonError: false,
        openID: null,
        sortForNew: true,
        filters: []
    }

    //# Dette er en lifecycle method.
    //# componentDidMount() er et navn React kender.
    //# Denne her aktiverer selv når komponentet er loaded færdig
    //# Der er mange forskellige af disse.
    //# Den her er den eneste der bliver bruge gennem dette projekt.
    componentDidMount() {
        fetch('https://larp-market.dk/wordpress/wp-json/acf/v3/gallery')
            .then(response => response.json())
            .then(data => {
                //# Her ændres state. Når .fetch() er færdig ændres state og komponentet opdateres
                this.setState({ json: data });
            })
            //# .catch() håndtere fejl hvis der sker en fejl i .fetch()
            .catch(() => this.setState({ jsonError: true }));
    }

    //# Bruges som en normal function
    searchResults = (sortForNew = true, filters) => {
        //# Destructuring. En del af vanilla Javascript, men bruges
        //# ofte i React til at definere variabler der bruges sådan her.
        //# Sådan undgå man at skulle skrive "this.state.json". Istedet skriver man "json"
        const {
            state: {
                json
            },
            sortResultsForNew,
            sortResultsForOld,
            filteredResults
        } = this;

        const filtered = filteredResults(json, filters);

        if (Array.isArray(filtered) === true) {
            if (sortForNew) {
                return filtered.sort(sortResultsForNew);
            } else {
                return filtered.sort(sortResultsForOld);
            }
        } else {
            return filtered;
        }
    }

    //# Normal sorterings function
    sortResultsForOld = (a, b) => {
        if (a.id < b.id) {
            return -1;
        }
        if (a.id > b.id) {
            return 1;
        }
        return 0;
    }

    sortResultsForNew = (a, b) => {
        if (a.id > b.id) {
            return -1;
        }
        if (a.id < b.id) {
            return 1;
        }
        return 0;
    }

    filteredResults = (json, filters) => {
        if (!filters[0]) {
            return json;
        }

        const filteredResults = json.filter(currentItem => {
            let matchedTags = false;
            currentItem.acf.tags.forEach(item => {
                if (filters.includes(item)) {
                    matchedTags = true;
                }
            });
            return matchedTags;
        });

        if (!filteredResults.length) {
            return 'no results';
        }

        return filteredResults;
    }

    handleClick = (newID) => {
        // Open || close => item
        if (newID === this.state.openID) {
            this.setState({ openID: null });
        } else {
            this.setState({ openID: newID });
        }
    }

    searchSorting = sorting => {
        this.setState({ sortForNew: sorting })
    }

    searchFilters = filters => {
        this.setState({ filters: filters })
    }

    //# Her kan man lave variabler og teknisk set functioner selvom de bør være uden for render()
    //# return værdien er det som renderes på hjemmesiden.
    render() {
        const {
            state: {
                json,
                jsonError,
                openID,
                sortForNew,
                filters
            },
            handleClick,
            searchResults,
            searchSorting,
            searchFilters
        } = this;

        return (
            <div className="gallery_wrapper">
                <GalleryMenu
                    sortCallback={searchSorting}
                    filtersCallback={searchFilters} />
                <div class="items_wrapper">
                    <section id="gallery_items">
                        {/* Input results */}
                        {Array.isArray(searchResults(sortForNew, filters)) === true && (
                            searchResults(sortForNew, filters).map(item => (
                                //# værdierne der gives vidre kan bruges i GalleryItem komponentet
                                //# De definere props.
                                //# Props fungere på samme måde som state, men man omdefinere ikke props.
                                <GalleryItem
                                    key={item.id}
                                    data={item.acf}
                                    itemID={item.id}
                                    openID={openID}
                                    filters={filters}
                                    onClick={() => { handleClick(item.id) }} />
                            ))
                        )}
                        {/* No results found */}
                        {searchResults(sortForNew, filters) === 'no results' && (
                            <div className="json_error">
                                <p>Ingen søgeresultater fundet</p>
                            </div>
                        )}
                        {/* Error when fetching JSON */}
                        {jsonError && (
                            <div className="json_error">
                                <p>Kunne ikke oprette forbindelse til databasen</p>
                                <p>Prøv venligst igen senere</p>
                            </div>
                        )}
                        {/* Loading JSON */}
                        {!jsonError && !Array.isArray(json) === true && (
                            <LoadSymbol />
                        )}
                    </section>
                </div>
            </div>
        )
    }
}

//# Her indsættes komponentet.
//# Er komponentet inde i et andet komponent ville man skrive "export default" hvor class laves.
//# Der kan også være flere komponenter i et script. Dertil ville man kun skrive default ved ét komponent
const domContainer = document.querySelector('#gallery_wrapper');
ReactDOM.render(e(Gallery), domContainer);