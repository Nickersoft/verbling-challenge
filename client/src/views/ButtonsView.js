import React, {Component} from 'react';
import Button from '../components/Button';

export default class ButtonsView extends Component {

    constructor(props) {
        super(props);

        this.showPrompt = this.showPrompt.bind(this);
    }

    showPrompt() {
        let item = window.prompt('Please enter a new item:');
        if (item != null)
            this.props.onAdd(item);
    }

    render() {
        return (
            <div className="table-row" style={{ height: '25px' }}>
                <div className="buttonPanel">
                    <Button className="pull-left" onClick={this.props.onOpenAll}>Open All</Button>
                    <Button className="pull-left" onClick={this.props.onCloseAll}>Close All</Button>
                    <Button className="pull-left" onClick={this.props.onToggleAll}>Toggle All</Button>
                    <Button className="pull-right accent" onClick={this.showPrompt}>Add</Button>
                </div>
            </div>
        );
    }

}