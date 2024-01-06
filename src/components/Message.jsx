import React from 'react';

const Message = () => {
    const userName = prompt('Enter your name');
    
    const valueHandler = () => {
        return userName;
    }

    const result = valueHandler();

    return (
       <>
       <h1>Welcome{result}</h1>
       </>
    );
};

export default Message;
