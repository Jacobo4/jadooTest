import './ServiceCard.scss';

function ServiceCard(props) {

    return (
        <div className={"ServiceCard"}>
            <figure className={"ServiceCard__thumbnail-wrapper"}>
                <img src={props.image} alt={props.title} className="ServiceCard__thumbnail"/>
            </figure>
            <h5 className="ServiceCard__title">{props.title}</h5>
            <p className="ServiceCard__description">{props.description}</p>
        </div>
    );
}

export default ServiceCard;
