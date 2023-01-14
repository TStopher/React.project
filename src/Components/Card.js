import React from 'react'

function Card(props) {
    return (
        <div className="Card">
            <h1 className="Title">{props.title}</h1>
            <img src={props.coverImg} alt="game"/>
             <div className="span-div">
                <span>{props.releaseDate}</span>
                <span>{props.platforms}</span>
             </div>
            <p>{props.description}</p>
        </div>
    )
}
export default Card;