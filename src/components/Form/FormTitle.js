import React, {Component} from 'react';
import PropTypes from 'prop-types';

class FormTitle extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            title: 'Damm Daniel'
        };
    }

    handleChange(event) {
        let value = event.target.value;
        if(!/[*]/g.test(value)){
            this.setState({title: value});
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>

                <label htmlFor="title">Modifier le titre</label>
                <input id="title" type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
            </div>
        );
    }
}

FormTitle.propTypes = {};

export default FormTitle;