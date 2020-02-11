import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SimsponsQuoteDetails extends Component {

    constructor(props) {
        super(props);

        this.renderQuote = this.renderQuote.bind(this);
    }

    renderQuote() {
        let quoteObject = this.props.quote;

        if(quoteObject === null){
            return (<div>Loading...</div>);
        }

        const {quote, character, image} = quoteObject;

        return (
            <div>
                <img src={ image } alt={ image }/>
                <q>{ quote }</q>
                <small>{ character }</small>
            </div>
        )
    }

    render() {
        return (
           this.renderQuote()
        );
    }
}

SimsponsQuoteDetails.propTypes = {
    quote: PropTypes.object
};

export default SimsponsQuoteDetails;