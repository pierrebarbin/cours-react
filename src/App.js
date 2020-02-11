import React, {Component} from 'react';
import './App.css';
import SimpsonsForm from "./components/Simpsons/SimpsonsForm";


class App extends Component {
    render(){
        return (
            <div className="App">
                <SimpsonsForm />
            </div>
        );
    }
}

export default App;
