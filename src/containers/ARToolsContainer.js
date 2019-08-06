import {connect} from 'react-redux'
import ARToolsComponent from '../components/ARToolsComponent';
import { updateArtistNameInput, updateArtistLinkInput, updateArtistCategoryInput, 
        clearArtistInput, updateCategoryNameInput, clearCategoryInput } from '../actions/UpdateFormAction'
import { addNewArtist, addNewCategory } from '../actions/AddEntityAction'

const mapStateToProps = (state, ownProps) => {
    return {
        artistsList: state.dataLists.artists,
        categoriesList: state.dataLists.categories,
        artistNameInputValue: state.inputValues.artistNameInputValue,
        artistLinkInputValue: state.inputValues.artistLinkInputValue,
        artistCategoryInputValue: state.inputValues.artistCategoryInputValue,
        categoryNameInputValue: state.inputValues.categoryNameInputValue,
        fullState: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleArtistNameChange: (text) => {
            dispatch(updateArtistNameInput(text));
        },
        handleArtistLinkChange: (text) => {
            dispatch(updateArtistLinkInput(text));
        },
        handleArtistCategoryChange: (text) => {
            dispatch(updateArtistCategoryInput(text));
        },
        handleCategoryNameChange: (text) => {
            dispatch(updateCategoryNameInput(text));
        },
        submitNewArtist: (name, link, categ) => {
            dispatch(addNewArtist(name, link, categ));
        },
        submitNewCategory: (name) => {
            dispatch(addNewCategory(name));
        },
        clearArtistInput: () => {
            dispatch(clearArtistInput());
        },
        clearCategoryInput: () => {
            dispatch(clearCategoryInput());
        },
        dispatch : dispatch
    }
};

let ARToolsContainer = connect(mapStateToProps,mapDispatchToProps)(ARToolsComponent);

export default ARToolsContainer;