import React, {Component} from 'react';
import Constants from '../util/Constants';

export default class ListItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            collapsed: false,
            toggledCollapse: false
        }

        this.toggleCollapsed = this.toggleCollapsed.bind(this);
    }

    toggleCollapsed() {
        this.setState({collapsed: !this.state.collapsed});
    }

    componentWillReceiveProps(nextProp) {
        if (this.props != nextProp) {
            switch(nextProp.collapseState) {
                case Constants.ITEMS_OPENED:
                    this.setState({collapsed: false});
                    break;
                case Constants.ITEMS_CLOSED:
                    this.setState({collapsed: true});
                    break;
                case Constants.ITEMS_TOGGLED:
                    console.log(this.state.toggledCollapse);
                    this.setState({
                        collapsed: !this.state.toggledCollapse,
                        toggledCollapse: !this.state.toggledCollapse
                    });
                    break;
            }
        }
    }

    render() {
        return (
            <li className={"list-item " + (this.state.collapsed ? "collapsed" : "")} onClick={this.toggleCollapsed}>
                <span className="text pull-left">{this.props.item}</span>
                <span className="arrow pull-right"></span>
            </li>
        )
    }

}
