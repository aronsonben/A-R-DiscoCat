import {connect} from 'react-redux'
import ArtistListComponent from '../components/ArtistListComponent';

const mapStateToProps = (state, ownProps) => {
    return {
        artists: ownProps.artists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch : dispatch
    }
};

let ArtistListContainer = connect(mapStateToProps,mapDispatchToProps)(ArtistListComponent);

export default ArtistListContainer;