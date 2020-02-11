import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SimpsonsListItem extends Component {
    render() {
        const {quote, character, image} = this.props.quote;
        return (
            <div className="QuoteCard">
                <img src={ image } alt={ image }/>
                <q>{ quote }</q>
                <small>{ character }</small>
            </div>
        );
    }
}

SimpsonsListItem.propTypes = {
    quote: PropTypes.object.isRequired
};

export default SimpsonsListItem;