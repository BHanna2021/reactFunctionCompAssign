import React from 'react';

const Input = (props) => {
    return(
        <div>
            <div>
                <input placeholder={props.name} onChange={e => props.setName(e.target.value)} type='text' />
                <input placeholder={props.age} onChange={e => props.setAge(e.target.value)} type='text' />
                <input placeholder={props.hobbies} onChange={e => props.setHobbies(e.target.value)} type='text' />
            </div>
        </div>
    )
}

export default Input;