import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FormTitle from "./FormTitle";

class Form extends Component {
    render() {
        return (
            <div>
                <FormTitle />
            </div>
        );
    }
}

Form.propTypes = {};

export default Form;