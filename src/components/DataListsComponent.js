import React from 'react';
import ArtistListContainer from '../containers/ArtistListContainer'
import CategoryListContainer from '../containers/CategoryListContainer'

class DataListsComponent extends React.Component {

    render() {
        let { artistList, categoryList } = this.props;
        return (
            <div>
                <h4>Artists List</h4>
                <ArtistListContainer artists={artistList}/>
                <h4>Categories List</h4>
                <CategoryListContainer categories={categoryList}/>
            </div>
        );
    }
}

export default DataListsComponent;