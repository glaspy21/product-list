import React, {Component} from 'react';
import { connect } from 'react-redux';
import { categoryHeader } from './app';

class Categories extends Component {
    constructor(props) {
        super(props)
    }

    //this function takes the categories provided in a list by the store, and adds them to the drop down category button at the top of the page.
    renderCategories() {
        if ( this.props.categoryList !== undefined ) {
                return this.props.categoryList.map(category => {
                    return (
                        <a className="dropdown-item" id={category} href="#" onClick={this.props.selectCategory}>{category}</a>
                    )
                })
    
            } else {
                return (
                    <a className="dropdown-item" href="#">No Categories</a>
                )     
            }       
    }
        
    

    render() {
        return (
            
                <div className="dropdown col-md-4">
                    <span className="pr-2">filter by category:</span>
                 
                    <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        { categoryHeader }
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" id="" href="#" onClick={this.props.selectCategory}>NONE</a>
                        {this.renderCategories()}
                    </div>
                </div>
        )
    }
}

function mapStateToProps( state ) {
    return {
        categoryList: state.products.categoryList
    }
};

export default connect (mapStateToProps) (Categories)