const initStateObj = {
    appName: "RMovies",
    searchListingResults: null,
    searchListingType: null
};

const displaySearchResults = "DISPLAY_SEARCH_RESULTS";

export const RootReducer = (thisStateObj = initStateObj, thisActionObj) => {
    switch(thisActionObj.type){
        case displaySearchResults: {
            return {
                ...thisStateObj,
                searchListingResults: thisActionObj.payload.searchResults,
                searchListingType: thisActionObj.payload.searchType,
                queryText: thisActionObj.payload.queryText
            }
        }
        default:{
            return thisStateObj;
        }
    }
};

export const DisplaySearchResultAction = (obj) => {
    return {
        type: displaySearchResults,
        payload: obj
    }
};
