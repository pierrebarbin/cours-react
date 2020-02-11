import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SimpsonsFormButton from "./SimpsonsFormButton";
import axios from "axios";
import SimsponsQuoteDetails from "./SimsponsQuoteDetails";

class SimpsonsForm extends Component {

    constructor(props) {
        super(props);

        this.getQuote = this.getQuote.bind(this);

        this.state = {
            quote: null
        }
    }

    getQuote(){
        axios.get(`https://simpsons-quotes-api.herokuapp.com/quotes`)
            .then(res => {
                const quote = res.data[0];
                this.setState({quote: quote});
            })
    }

    componentDidMount(){
        this.getQuote();
    }

    render() {
        return (
            <div>
                <form>
                    <SimsponsQuoteDetails quote={ this.state.quote } />
                    <SimpsonsFormButton getQuote={ this.getQuote }/>
                </form>
            </div>
        );
    }
}

SimpsonsForm.propTypes = {};

export default SimpsonsForm;