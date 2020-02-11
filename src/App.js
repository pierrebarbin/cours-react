import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ContactList from "./components/ContactList";
import Form from "./components/Form/Form";


class App extends Component {
    render(){
        return (
            <div className="App">
                <ContactList />
                <Form />
            </div>
        );
    }
}

export default App;
