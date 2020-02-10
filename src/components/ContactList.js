import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Contact from "./Contact";

class ContactList extends Component {

    state = {
        persons: [
            {
                id: 1,
                name: "JBoss",
                avatar: "https://radiomedecinedouce.com/attachments/images/broadcast/41063/medium.png",
                online: true
            },
            {
                id: 2,
                name: "Pierre",
                avatar: "https://pbs.twimg.com/profile_images/595659609349718016/QpJAamaV_400x400.jpg",
                online: false
            },
            {
                id: 3,
                name: "Jean",
                avatar: "https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/c5/c9/15/c5c915bb-c247-72c1-05cb-78b574563c51/source/256x256bb.jpg",
                online: true
            },
            {
                id: 4,
                name: "Julie",
                avatar: "https://emiliedammedumoulin.com/wp-content/uploads/2018/07/chat-prestation-homepage.jpg",
                online: true
            },
            {
                id: 5,
                name: "Benjamin",
                avatar: "https://pbs.twimg.com/profile_images/378800000511590792/d6741f8cdac8bc8882c6f4935a76c0d4.jpeg",
                online: false
            },
        ]
    };

    render() {
        return (
            <div>
                {this.state.persons.map((person) => {
                    return <Contact key={person.id} person={person} />
                })}
            </div>
        );
    }
}

ContactList.propTypes = {};

export default ContactList;