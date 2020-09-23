import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Board from './components/Board';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddProjectTask from './components/ProjectTask/AddProjectTask';

class App extends Component {
    render() {
        return (
            <Router>
                <div className='App'>
                    <Navbar />
                    <Route
                        exact
                        path='/addProjectTask'
                        component={AddProjectTask}
                    />
                    <Route exact path='/' component={Board} />
                </div>
            </Router>
        );
    }
}

export default App;
