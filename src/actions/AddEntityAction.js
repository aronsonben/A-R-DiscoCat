function addNewArtist(name, link, categ) {
    return {
        type: "ADD_NEW_ARTIST",
        artist: name,
        url: link,
        category: categ
    };
}

function addNewGenre(data) {
    return {
        type: "ADD_NEW_GENRE",
        text: data
    };
}

function addNewCategory(name) {
    return {
        type: "ADD_NEW_CATEGORY",
        name: name
    };
}

export {
    addNewArtist,
    addNewGenre,
    addNewCategory
}