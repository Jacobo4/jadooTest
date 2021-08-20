//Core
import React, {useState} from 'react';

import './BookCard.scss';
import cardDecor from "../../assets/images/global/decors/elipse-1.png";

function BookCard(props) {

    const [stateBoxDisplay, setStateDisplay] = useState(false);

    return (
        <div onMouseEnter={() => setStateDisplay(true)}
             onMouseLeave={() => setStateDisplay(false)} className={"BookCard"}>
            <img src={cardDecor} alt="" className="BookCard__decor"/>
            <img src={props.image} alt={props.title} className="BookCard__thumbnail"/>
            <h5 className="BookCard__title">{props.title}</h5>
            <p className="BookCard__description">{props.description}</p>
            <div className="BookCard__actions">
                <button className="BookCard__action">
                    <i className="icon-leaf"/>
                </button>
                <button className="BookCard__action">
                    <i className="icon-map"/>
                </button>
                <button className="BookCard__action">
                    <i className="icon-send"/>
                </button>
            </div>
            <span className="BookCard__population">
                <i className="icon-building"/>
                {props.population}
            </span>
            <button className="BookCard__action BookCard__action--like">
                <i className="icon-heart"/>
            </button>

            <div className={`BookCard-stateBox BookCard-stateBox--${stateBoxDisplay ? 'show':'hidden'}`}>
                <img src={props.stateBoxThumbnail} className="BookCard-stateBox__thumbnail" alt={props.stateBoxTitle}/>
                <div>
                    <div className="BookCard-stateBox__state">{props.stateBox}</div>
                    <div className="BookCard-stateBox__title">{props.stateBoxTitle}</div>
                    <div className="BookCard-stateBox__percentage">
                        <span style={{width: props.stateBoxPercentage}} className="BookCard-stateBox__percentage-bar"/>
                        <span>{props.stateBoxPercentage}</span>
                        &nbsp;completed

                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookCard;
