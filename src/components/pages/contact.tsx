import React, { useState } from "react";
import { Container, Form, Col, Row, Button, Modal } from "react-bootstrap";
import {
  StyledContact,
  ContactHeader,
  Message,
  Call,
  Visit,
  LetsTalk,
  TextContainer,
  FormContainer,
} from "../styles/contactStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faMobileScreenButton,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Contact: React.FC = () => {
  //states
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);

  //handlers

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <StyledContact>
      <ContactHeader>
        <Container>
          <Message>
            <h3>
              <FontAwesomeIcon
                icon={faMessage}
                color="yellow"
                fontSize={"1.25em"}
                beat
              />
            </h3>
            <h4>Send Message</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              eligendi odio vitae et voluptatum, assumenda ullam sunt optio sit
            </p>
          </Message>
          <Call>
            <FontAwesomeIcon
              icon={faMobileScreenButton}
              color="yellow"
              fontSize={"2.2em"}
              beat
            />
            <h4>Give us a call</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              eligendi odio vitae et voluptatum, assumenda ullam sunt optio sit
            </p>
          </Call>
          <Visit>
            <h3>
              {" "}
              <FontAwesomeIcon
                icon={faLocationDot}
                color="yellow"
                fontSize={"1.25em"}
                beat
              />
            </h3>
            <h4>Come for a visit</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              eligendi odio vitae et voluptatum, assumenda ullam sunt optio sit
            </p>
          </Visit>
        </Container>
      </ContactHeader>

      {/* LETS TALK */}
      <LetsTalk>
        <Container>
          <TextContainer>
            <p>04 // LET'S TALK</p>
            <h2>
              <span>Need help?</span> Get in touch with us.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              soluta accusantium consectetur dolor voluptatibus. Exercitationem
              reprehenderit veniam sunt? Porro debitis quisquam, eaque molestiae
              voluptas inventore optio atque enim mollitia ab?
            </p>
          </TextContainer>
          <FormContainer>
            <Form className="ml-100" onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                  <label htmlFor="inputEmail4">Name:</label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={handleName}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <label htmlFor="inputEmail4">Email:</label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={handleEmail}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGriMessage">
                <label htmlFor="inputEmail4">Message:</label>
                <Form.Control
                  placeholder="Write message here..."
                  value={message}
                  onChange={handleMessage}
                />
              </Form.Group>
              <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Add me to your mailing list
                  </label>
                </div>
              </div>
              <Button onClick={handleShow}>Submit</Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Message Sent</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Thanks for your message. We'll respond ASAP!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Form>
          </FormContainer>
        </Container>
      </LetsTalk>
    </StyledContact>
  );
};

export default Contact;
