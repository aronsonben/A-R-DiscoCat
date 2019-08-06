import React from 'react';
import DataListsContainer from '../containers/DataListsContainer';

class ARTools extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddArtist = this.handleAddArtist.bind(this);
        this.handleAddCategory = this.handleAddCategory.bind(this);
        this.artistNameChange = this.artistNameChange.bind(this);
        this.artistLinkChange = this.artistLinkChange.bind(this);
        this.artistCategoryChange = this.artistCategoryChange.bind(this);
        this.categoryNameChange = this.categoryNameChange.bind(this);
        this.printState = this.printState.bind(this);
    }

    handleAddArtist(evt) {
        let { artistsList, categoriesList, artistNameInputValue, artistLinkInputValue, 
            artistCategoryInputValue, submitNewArtist, clearArtistInput } = this.props;
        evt.preventDefault();
        let existingArtist = artistsList.filter(artist => (artist.name === artistNameInputValue));
        if(existingArtist.length > 0) {
            console.log("artist already exists");
            document.getElementById("artistInput")
            clearArtistInput();
            return;
        }
        let existingCategory = categoriesList.filter(categ => (categ.name === artistCategoryInputValue));
        if(existingCategory.length > 0) {
            console.log(existingCategory[0]);
            submitNewArtist(artistNameInputValue, artistLinkInputValue, existingCategory[0].name);
        } else {
            submitNewArtist(artistNameInputValue, artistLinkInputValue, artistCategoryInputValue);
        }
        clearArtistInput();
    }

    handleAddCategory(evt) {
        let { categoryNameInputValue, submitNewCategory, clearCategoryInput } = this.props;
        evt.preventDefault();
        console.log(categoryNameInputValue);
        submitNewCategory(categoryNameInputValue);
        clearCategoryInput();
    }

    artistNameChange(evt) {
        let { handleArtistNameChange } = this.props;
        handleArtistNameChange(evt.target.value);
    }

    artistLinkChange(evt) {
        let { handleArtistLinkChange } = this.props;
        handleArtistLinkChange(evt.target.value);
    }

    artistCategoryChange(evt) {
        let { handleArtistCategoryChange } = this.props;
        handleArtistCategoryChange(evt.target.value);
    }

    categoryNameChange(evt) {
        let { handleCategoryNameChange } = this.props;
        handleCategoryNameChange(evt.target.value);
    }

    printState(evt) {
        let { fullState } = this.props;
        console.log(fullState);
    }

    render() {
        let { artistNameInputValue, artistLinkInputValue, artistCategoryInputValue, categoryNameInputValue } = this.props;
        return (
            <div>
                <div id="addArtistsDiv">
                    <label>
                        Name:
                        <input className="artistInput" type="text" value={artistNameInputValue} onChange={this.artistNameChange}/>
                        Link to music:
                        <input className="artistInput" type="text" value={artistLinkInputValue} onChange={this.artistLinkChange}/>
                        Category:
                        <input className="artistInput" type="text" value={artistCategoryInputValue} onChange={this.artistCategoryChange}/>
                    </label>
                    <button onClick={this.handleAddArtist}>Add Artist</button>
                </div>
                <div id="addCategoriesDiv">
                    <label>
                        Name:
                        <input className="categoryInput" type="text" value={categoryNameInputValue} onChange={this.categoryNameChange}/>
                    </label>
                    <button onClick={this.handleAddCategory}>Add Category</button>
                </div>
                <button onClick={this.printState}>Print state</button>
                <DataListsContainer/>
            </div>
        );

    }

}

export default ARTools;