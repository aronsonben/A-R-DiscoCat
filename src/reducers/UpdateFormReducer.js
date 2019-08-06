import initialState from "../state/initialState";

let updateFormReducer = (state = initialState.inputValues, action) => {
    switch(action.type) {
        case "UPDATE_ARTIST_NAME_INPUT": {
            return {
                ...state,
                artistNameInputValue: action.text
            }
        }
        case "UPDATE_ARTIST_LINK_INPUT": {
            return {
                ...state,
                artistLinkInputValue: action.text
            }
        }
        case "UPDATE_ARTIST_CATEGORY_INPUT": {
            return {
                ...state,
                artistCategoryInputValue: action.text
            }
        }
        case "UPDATE_CATEGORY_NAME_INPUT": {
            return {
                ...state,
                categoryNameInputValue: action.text
            }
        }
        case "CLEAR_ARTIST_INPUT": {
            return {
                ...state,
                artistNameInputValue: '',
                artistLinkInputValue: '',
                artistCategoryInputValue: ''
            }
        }
        case "CLEAR_CATEGORY_INPUT": {
            return {
                ...state,
                categoryNameInputValue: ''
            }
        }
        default: 
            return state;
    }
}

export default updateFormReducer;