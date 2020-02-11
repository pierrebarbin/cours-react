import React, {Component} from 'react';
import './App.css';
import SimpsonsForm from "./components/Simpsons/SimpsonsForm";
import SimsonsList from "./components/Simpsons/SimsonsList";


class App extends Component {
    render(){
        return (
            <div className="App">
                <SimpsonsForm />
                <SimsonsList />
            </div>
        );
    }
}

export default App;
