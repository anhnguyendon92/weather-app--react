import React from 'react';

const Form = (props) => {
    return (
        <form>
            <input type="text" name="city" placeholder="Choose a City"></input>
            <input type="text" name="country" placeholder="Choose a Country"></input>
            <button>Get Weather</button>
        </form>
    )
}

export default Form;