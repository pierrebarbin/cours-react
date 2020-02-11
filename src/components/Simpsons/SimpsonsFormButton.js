import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class SimpsonsFormButton extends Component {

    render() {
        return (
            <div>
                <button type="button" onClick={ this.props.getQuote }>Nouvelle citation</button>
            </div>
        );
    }
}

SimpsonsFormButton.propTypes = {
    getQuote: PropTypes.func.isRequired
};

export default SimpsonsFormButton;