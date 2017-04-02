import React, {Component} from 'react';
import ButtonsView from './ButtonsView';
import SearchBoxView from './SearchBoxView';
import ListView from './ListView';
import Constants from '../util/Constants';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            filterText: ''
        };

        this.setFilterText = this.setFilterText.bind(this);
        this.addItem = this.addItem.bind(this);
        this.openAll = this.openAll.bind(this);
        this.closeAll = this.closeAll.bind(this);
        this.toggledAll = this.toggledAll.bind(this);
    }

    setFilterText(text) {
        this.setState({ filterText: text });
    }

    addItem(text) {
        let items = this.state.items.slice();
        items.push(text);
        this.setState({ items: items });
    }

    openAll() {
        this.setState({ collapseState: Constants.ITEMS_OPENED });
    }

    closeAll() {
        this.setState({ collapseState: Constants.ITEMS_CLOSED });
    }

    toggledAll() {
        this.setState({ collapseState: Constants.ITEMS_TOGGLED });
    }

    render() {
        return (
            <div className="window table">
                <div className="table-row">
                    <div className="content">
                        <div className="table">
                            <SearchBoxView filterText={this.state.filterText}
                                           onKeyUp={this.setFilterText} />
                            <ListView filterText={this.state.filterText}
                                      collapseState={this.state.collapseState}
                                      data={this.state.items} />
                        </div>
                    </div>
                </div>
                <ButtonsView onAdd={this.addItem}
                             onOpenAll={this.openAll}
                             onCloseAll={this.closeAll}
                             onToggleAll={this.toggledAll} />
            </div>
        );
    }

}
