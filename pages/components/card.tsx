import React from 'react'

const Card = (props) => {
    return (
        <div className="card my-5 p-5">
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}

export default Card
