import React, {Component} from 'react';
import './add-item.css';

export default class AddItem extends Component {
    render(){
        return(
            <div className="addItem">
                <button className="btn btn-outline-secondary" onClick={() => this.props.onItemAdded('hello')}>Add item</button>
            </div>
        )
    }
}
