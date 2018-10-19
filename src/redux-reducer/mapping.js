import { DisplaySearchResultAction } from './reducer-action';

export const MapDispatchToProps = (dispatchFunc) => {
    return {
        startSearchProcess: (apiResponse, searchType, searchText) => {
            dispatchFunc(DisplaySearchResultAction({
                searchResults: apiResponse,
                searchType: searchType,
                queryText: searchText
            }));
        }
    }
};

export const MapStateToProps = (ReduxStateObj) => {
    return ReduxStateObj;
};
