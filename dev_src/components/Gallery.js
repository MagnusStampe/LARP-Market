//Components
import GalleryItem from './GalleryItem';
import GalleryMenu from './GalleryMenu';
import LoadSymbol from './LoadSymbol';

'use strict';

const e = React.createElement;

class Gallery extends React.Component {
    state = {
        json: null,
        jsonError: false,
        openID: null,
        sortForNew: true,
        filters: []
    }

    componentDidMount() {
        fetch('https://larp-market.dk/wordpress/wp-json/acf/v3/gallery')
            .then(response => response.json())
            .then(data => {
                this.setState({ json: data });
            })
            .catch(() => this.setState({ jsonError: true }));
    }

    searchResults = (sortForNew = true, filters) => {
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

const domContainer = document.querySelector('#gallery_wrapper');
ReactDOM.render(e(Gallery), domContainer);