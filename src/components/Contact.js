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

    render() {
        let {id, name, avatar} = this.props.person;
        return (
            <div className="Contact">
                <img className="avatar" src={ avatar } alt={ avatar }/>
                <h4 className="name">{ name }</h4>
                <div className="status">
                    <div className="status-text" onClick={ this.props.toggleStatus.bind(this,id) }>{ this.isOnline() }</div>
                </div>
            </div>
        );
    }
}

Contact.propTypes = {
    person: PropTypes.object.isRequired
};

export default Contact;