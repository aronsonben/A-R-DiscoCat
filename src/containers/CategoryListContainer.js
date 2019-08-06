import {connect} from 'react-redux'
import CategoryListComponent from '../components/CategoryListComponent';

const mapStateToProps = (state, ownProps) => {
    return {
        categories: ownProps.categories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch : dispatch
    }
};

let CategoryListContainer = connect(mapStateToProps,mapDispatchToProps)(CategoryListComponent);

export default CategoryListContainer;