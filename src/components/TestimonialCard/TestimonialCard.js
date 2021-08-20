import './TestimonialCard.scss';

function TestimonialCard(props) {

    return (
        <div className={"TestimonialCard"}>
            <img className={"TestimonialCard__thumbnail"} src={props.thumbnail} alt={props.name}/>
            <p className="TestimonialCard__message">“{props.message}”</p>
            <span className="TestimonialCard__name">{props.name}r</span>
            <span className="TestimonialCard__job">{props.position}</span>
        </div>
    );
}

export default TestimonialCard;
