import './DestinationCard.scss';

function DestinationCard(props) {

    return (
        <div className={"DestinationCard"} style={{backgroundImage: `url(${props.image})`}}>
            <div className="DestinationCard-wrapper">
                <span className="DestinationCard__location">{props.location}</span>
                <span className="DestinationCard__price">{props.price}</span>
                <span className="DestinationCard__duration">
                    <i className={"icon-navigation"}/>
                    {props.duration}
                </span>
            </div>
        </div>
    );
}

export default DestinationCard;
