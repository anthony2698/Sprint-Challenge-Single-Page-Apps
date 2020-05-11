import React from "react";
import { Card } from "react-bootstrap";

export default function CharacterCard(props) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.character.image} />
        <Card.Body>
          <Card.Title>Name: {props.character.name}</Card.Title>
          <Card.Text>
            Status: {props.character.status} <br />
            Gender: {props.character.gender} <br />
            Species: {props.character.species}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
