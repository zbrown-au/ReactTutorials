import React from 'react'

class SearchBar extends React.Component {
    state = {
        term: ""
    };

    onFormSubmit = event => {
        event.preventDefault();

        this.setState({term: event.target.value})

        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={this.onFormSubmit} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;