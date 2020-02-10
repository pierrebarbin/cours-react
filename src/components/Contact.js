import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
    render() {
        let {name, online, avatar} = this.props.person;
        return (
            <div className="person-item">
                <h4>{ name }</h4>
                <p>{ online ? 'Online' : 'Offline' }</p>
                <img className="avatar" src={avatar} alt={avatar}/>
            </div>
        );
    }
}

Contact.propTypes = {
    person: PropTypes.object.isRequired
};

export default Contact;