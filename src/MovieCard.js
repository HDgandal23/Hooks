import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';



const MovieCard = (props) => {

    return (
      
        
            <Card>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>Titre : { props.title }</Card.Title>
                    <Card.Text>
                    {props.describe}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted"> Notes : { props.note }</small>
                </Card.Footer>
            </Card>
      
        
    )

}

export default MovieCard;