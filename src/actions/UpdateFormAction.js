function updateArtistNameInput(data) {
    return {
        type: "UPDATE_ARTIST_NAME_INPUT",
        text: data
    };
}

function updateArtistLinkInput(data) {
    return {
        type: "UPDATE_ARTIST_LINK_INPUT",
        text: data
    };
}

function updateArtistCategoryInput(data) {
    return {
        type: "UPDATE_ARTIST_CATEGORY_INPUT",
        text: data
    }
}

function updateCategoryNameInput(data) {
    return {
        type: "UPDATE_CATEGORY_NAME_INPUT",
        text: data
    }
}

function clearArtistInput() {
    return {
        type: "CLEAR_ARTIST_INPUT"
    }
}

function clearCategoryInput() {
    return {
        type: "CLEAR_CATEGORY_INPUT"
    }
}

export {
    updateArtistNameInput,
    updateArtistLinkInput,
    updateArtistCategoryInput,
    updateCategoryNameInput,
    clearArtistInput,
    clearCategoryInput
}