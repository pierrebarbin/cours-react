import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from "./components/Contact";

class App extends Component {

    state = {
        persons: [
            {
                name: "JBoss",
                avatar: "https://radiomedecinedouce.com/attachments/images/broadcast/41063/medium.png",
                online: true
            },
            {
                name: "Pierre",
                avatar: "https://pbs.twimg.com/profile_images/595659609349718016/QpJAamaV_400x400.jpg",
                online: false
            },
            {
                name: "Jean",
                avatar: "https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/c5/c9/15/c5c915bb-c247-72c1-05cb-78b574563c51/source/256x256bb.jpg",
                online: true
            },
        ]
    };

    render(){
        return (
            <div className="App">
                {this.state.persons.map((person) => {
                    return <Contact person={person} />
                })}
            </div>
        );
    }
}

export default App;
