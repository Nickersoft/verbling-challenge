import React, {Component} from 'react';
import ListItem from '../components/ListItem';

export default class ListView extends Component {

    render() {
        const filterText = this.props.filterText;
        return (
            <div className="table-row" style={{height: '100%'}}>
                <div className="list">
                    {this.props.data.map((item, index) => {
                        if (item.includes(filterText))
                            return <ListItem key={index} item={item} collapseState={this.props.collapseState} />
                    })}
                </div>
            </div>
        );
    }

}
