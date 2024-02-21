import './App.css';
import MovieListe from './MovieListes';
import MovieCard from './MovieCard';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';




function App() {

  const [show, setShow] = useState(false);

  const [listMovies, setListMovies] = useState(MovieListe);

  const handleAdd = () => {
    setTitle(title);
    listMovies.push(
      {
        title: title,
        describe: "this is one the best film ever",
        postUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAz7k5nlH0WihnFjfwhWBbX97LEcXkXsoFFg&usqp=CAU",
        note:  28
     }
    )

    setListMovies(listMovies)

  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   const [title, setTitle] = useState('')
  

  return (
  
  
    <div>
      
    
        <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
                <Navbar.Brand href="#home"> Best-Movies </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home"><Button variant="primary" onClick={handleShow}>
                        New Movie
                   </Button> </Nav.Link>



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un filme</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> Titre </Form.Label>
              <Form.Control
                type="text"
                placeholder="titre filme"
                onChange={title}
              />
              <Form.Label> Notes </Form.Label>
              <Form.Control
                type="number"  
               
              />

              <Form.Label> Description </Form.Label>
              <Form.Control as="textarea" rows={3} />

              <Form.Label> ImageUrl </Form.Label>
              <Form.Control
                type="text"  
               
              />

            
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Ajouter
          </Button>
        </Modal.Footer>
      </Modal>


          
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>  
            <br></br>
              
              <CardGroup>
            
                {
                
                  MovieListe.map(mL => (

                    <MovieCard note={mL.note} title = {mL.title} img={mL.postUrl} describe= {mL.describe} />
                  ))
                  
                }

            </CardGroup>
        
         </div>
  );
}

export default App;
