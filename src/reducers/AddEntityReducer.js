import initialState from "../state/initialState";

let addEntityReducer = (state = initialState.dataLists, action) => {
    switch(action.type) {
        case "ADD_NEW_ARTIST": {
            let artistKey = action.artist + "-" + action.url[action.url.length-1];
            let artist = {
                "key": artistKey,
                "name": action.artist,
                "url": action.url,
                "category": action.category
            }
            // add category if it doesn't exist
            let existingCategory = state.categories.filter(categ => (categ.name === action.category));
            let categoriesConcatenated = [];
            if(existingCategory.length > 0) {
                categoriesConcatenated = state.categories;
            } else {
                let categoryKey = action.category + "-" + (state.categories.length+100);
                let categ = {
                    "key": categoryKey,
                    "name": action.category
                }
                categoriesConcatenated = state.categories.concat(categ);
            }   
            let artistsConcatenated = state.artists.concat(artist); 
            return {
                ...state,
                artists: artistsConcatenated,
                categories: categoriesConcatenated
            }
        }
        case "ADD_NEW_CATEGORY": {
            console.log(action);
            let categoryKey = action.name + "-" + (state.categories.length+100);
            let categ = {
                "key": categoryKey,
                "name": action.name
            }
            let categoriesConcatenated = state.categories.concat(categ);
            return {
                ...state,
                categories: categoriesConcatenated
            }
        }
        default:
            return state;
    }
}

export default addEntityReducer;