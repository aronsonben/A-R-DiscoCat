import React from 'react'

class ArtistListComponent extends React.Component {
    render() {
        let { artists } = this.props;
        return(
            <div>
                {artists.map(artist => 
                    <li key={artist.key}>
                        {artist.name} - {artist.url} - {artist.category}
                    </li>
                )}
            </div>
        );
    }
}

export default ArtistListComponent;