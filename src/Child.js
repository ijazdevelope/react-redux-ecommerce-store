import React from 'react';

const Child = ({ parentCallback }) => {

    const getDetails = [{
        name: 'ijaz',
        email: 'ijaz55@gmail.com',
        age: 55,
    }]

    const styles = {
        border: '1px solid blue',
        borderRadius: '10px',
        padding: '0.5rem',
        margin: '0.5rem'
    }

    return (
        <div>
            <h1 className='text-xl'>child component <span className='text-4xl'> ({getDetails[0]?.name})</span></h1>
            <button style={styles} onClick={() => parentCallback(getDetails)}>child component Button</button>
        </div>
    )
}

export default Child
