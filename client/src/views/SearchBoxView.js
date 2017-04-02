import React, {Component} from 'react';

class SearchBoxView extends Component {

    constructor(props) {
        super(props);

        this.onKeyUp = this.onKeyUp.bind(this);
    }

    onKeyUp(e) {
        this.props.onKeyUp(e.target.value);
    }

    render() {
        return (
            <div className="table-row" style={{height: 38, zIndex: 100}}>
                <input type="text"
                       className={`search ${this.props.className}`}
                       placeholder="Search"
                       value={this.props.filterText}
                       onChange={this.onKeyUp}/>
            </div>
        );
    }
}

SearchBoxView.defaultProps = {
    className: ""
};

export default SearchBoxView;