import React from 'react';
import './App.css';
import Heading from './componets/heading';
import Form from './componets/form';

//const api_key = '0f3e11117cf4815f182186649c2179fa';


class App extends React.Component() {
    state = {
        temperture: '',
        city: '',
        country: '',
        humidity: '',
        pressure: '',
        icon: '',
        description: '',
        error: ''
    }
    render() {
        return(
            <div>
            <Heading />
            <Form />
            </div>
        )
    }
   
}

export default App;