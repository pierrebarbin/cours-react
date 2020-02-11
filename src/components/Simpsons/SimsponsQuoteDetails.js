import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SimsponsQuoteDetails extends Component {
    render() {
        const {quote, character, image } = this.props.quote;
        return (
            <div>
                <img src={ image } alt={ image }/>
                <q>{ quote }</q>
                <small>{ character }</small>
            </div>
        );
    }
}

SimsponsQuoteDetails.propTypes = {
    quote: PropTypes.object.isRequired
};

export default SimsponsQuoteDetails;