import {connect} from 'react-redux'
import DataListsComponent from '../components/DataListsComponent';

const mapStateToProps = (state, ownProps) => {
    return {
        artistList: state.dataLists.artists,
        categoryList: state.dataLists.categories,
        fullState: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch : dispatch
    }
};

let DataListsContainer = connect(mapStateToProps,mapDispatchToProps)(DataListsComponent);

export default DataListsContainer;