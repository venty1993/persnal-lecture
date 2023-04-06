import React, { useState } from 'react'
import CardInnerStar from './CardInnerStar'

export default function Card(props) {


    const stars = [];
    for (let i = 0; i < props.star; i++) {
        stars.push(<CardInnerStar></CardInnerStar>)
    }

    const [likes, setLikes] = useState(0);

    function clickButton() {
        setLikes(likes + 1);
    }



    console.log(stars);
    return (
        <div className="card">
            <div className="header-container">
                <h3 className="card-title">카드이름</h3>
                <span className="likes">{likes}</span>
                <button onClick={clickButton}>Like</button>
            </div>
            <ul className="stars">
                {stars}
            </ul>
            <figure></figure>
            <p className="card-explain">카드에 대한 설명</p>
        </div>
    )
}
