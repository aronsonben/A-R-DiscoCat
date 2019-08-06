import React from 'react'

class CategoryListComponent extends React.Component {
    render() {
        let { categories } = this.props;
        return(
            <div>
                {categories.map(categ => 
                    <li key={categ.key}>
                        {categ.name}
                    </li>
                )}
            </div>
        );
    }
}

export default CategoryListComponent;