import React from 'react';

const View = (bacon) => {
    return(
        <div>
            <h3>{bacon.passedName}</h3>
            <h3>{bacon.age}</h3>
            <h3>{bacon.hobbies}</h3>
        </div>
    )
}

export default View;