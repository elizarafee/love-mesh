import React from 'react'

const People = props => {

    const background = props.background ? props.background : '';
    const name = props.name ? props.name : 'People';

    return (
        <div className={"col-sm-12 col-md-6 text-center p-5 " + background}>
            { name }
        </div>
    )
}

export default People;
