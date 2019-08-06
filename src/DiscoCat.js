import React from 'react';
import ARToolsContainer from '../src/containers/ARToolsContainer';
import '../src/assets/css/DiscoCat.css';

class DiscoCat extends React.Component {

    render() {
        return(
            <div className="App">
               <h2>A&R DiscoCat</h2> 
               <p>A&R Discovery Categorization Tool</p>
               <ARToolsContainer/>
            </div>
        )
    }

}

export default DiscoCat;