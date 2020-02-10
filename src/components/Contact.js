import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {

    isOnline(){
        if(this.props.person.online){
            return <p>Online<span className="status-online"></span></p>;
        }
        return <p>Offline<span className="status-offline"></span></p>;
    }

    render() {
        let {name, avatar} = this.props.person;
        return (
            <div className="Contact">
                <img className="avatar" src={avatar} alt={avatar}/>
                <h4 className="name">{ name }</h4>
                <div className="status">
                    <div className="status-text">{ this.isOnline() }</div>
                </div>
            </div>
        );
    }
}

Contact.propTypes = {
    person: PropTypes.object.isRequired
};

export default Contact;