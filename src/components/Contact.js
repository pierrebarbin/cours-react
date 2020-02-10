import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {

    isOnline(){
        const isOnline = this.props.person.online;
        return (
            <p>
                { isOnline ? 'Online' : 'Offline' }
                <span className={ isOnline ? 'status-online' : 'status-offline'}></span>
            </p>
        );
    }

    eventListener(event) {
        const {id, type, className, text} = event.target;
        console.log(`Button "${id}" of type "${type}" and class "${className}" contains "${text}"`);
    };

    render() {
        let {id, name, avatar} = this.props.person;
        return (
            <div className="Contact">
                <img className="avatar" src={ avatar } alt={ avatar }/>
                <h4 className="name">{ name }</h4>
                <div className="status">
                    <div className="status-text">{ this.isOnline() }</div>
                </div>
                <button id={id} type="button" className="btn" onClick={ this.eventListener }>Click me</button>
            </div>
        );
    }
}

Contact.propTypes = {
    person: PropTypes.object.isRequired
};

export default Contact;