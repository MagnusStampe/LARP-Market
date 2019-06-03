import react, { Component } from 'react';
import PropTypes from 'prop-types';

'use strict';

export default class GalleryMenu extends Component {
    static propTypes = {
        sortCallback: PropTypes.func,
        filtersCallback: PropTypes.func
    };

    state = {
        searchSortForNew: true,
        latexChecked: false,
        leatherChecked: false,
        woodChecked: false,
        divChecked: false
    };

    newFilters = type => {
        const {
            latexChecked,
            leatherChecked,
            woodChecked,
            divChecked
        } = this.state;

        let allFilters;

        switch (type) {
            default:
            case 'latex':
                allFilters = [
                    latexChecked === false && 'latex',
                    leatherChecked === true && 'leather',
                    woodChecked === true && 'wood',
                    divChecked === true && 'div'
                ]
                return allFilters.filter(Boolean);
            case 'leather':
                allFilters = [
                    latexChecked === true && 'latex',
                    leatherChecked === false && 'leather',
                    woodChecked === true && 'wood',
                    divChecked === true && 'div'
                ]
                return allFilters.filter(Boolean);
            case 'wood':
                allFilters = [
                    latexChecked === true && 'latex',
                    leatherChecked === true && 'leather',
                    woodChecked === false && 'wood',
                    divChecked === true && 'div'
                ]
                return allFilters.filter(Boolean);
            case 'div':
                allFilters = [
                    latexChecked === true && 'latex',
                    leatherChecked === true && 'leather',
                    woodChecked === true && 'wood',
                    divChecked === false && 'div'
                ]
                return allFilters.filter(Boolean);
        }
    }

    handleCheck = type => {
        const {
            state,
            props: {
                filtersCallback
            },
            newFilters
        } = this;
        this.setState({ [type + "Checked"]: !state[type + "Checked"] });

        filtersCallback(newFilters(type));
    }

    checkbox = type => {
        return (
            <input
                type="checkbox"
                className="filter_checkbox"
                value={type}
                onChange={() => this.handleCheck(type)}
                id={"cb_" + type} />
        );
    }

    checkboxLabel = (type, danish) => {
        return (
            <label
                htmlFor={"cb_" + type} >
                {danish}
                <div className="checkbox">
                    <div className="check"></div>
                </div>
            </label>
        )
    }

    handleRadioButtonChange = () => {
        const {
            state: {
                searchSortForNew
            },
            props: {
                sortCallback
            }
        } = this;

        this.setState({ searchSortForNew: !searchSortForNew });
        console.log(searchSortForNew);
        sortCallback(!searchSortForNew);
    }

    radioButton = type => {
        return <input
            type="radio"
            name="radio_added"
            value={type}
            id={"rb_" + type}
            onChange={() => this.handleRadioButtonChange()} />;
    }

    radioButtonLabel = (type) => {
        return <label htmlFor={"rb_" + type}>{type === 'old' ? "Sidst" : "Først"} tilføjet</label>;
    }

    render() {
        const {
            radioButton,
            radioButtonLabel,
            checkbox,
            checkboxLabel
        } = this;
        return (
            <section id="gallery_menu">
                <h2>Sortér</h2>
                <div className="sorting_wrapper">
                    {radioButton('old')}
                    {radioButtonLabel('old')}
                    {radioButton('new')}
                    {radioButtonLabel('new')}
                    <div className="marker"></div>
                </div>
                <h2>Filtre</h2>
                <form id="filters">
                    {checkbox("latex")}
                    {checkboxLabel("latex", "Latexvåben")}
                    {checkbox("leather")}
                    {checkboxLabel("leather", "Læder udstyr")}
                    {checkbox("wood")}
                    {checkboxLabel("wood", "Træ arbejde")}
                    {checkbox("div")}
                    {checkboxLabel("div", "Diverse")}
                </form>
            </section >
        )
    };
}