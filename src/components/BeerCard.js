import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

export default function BeerCard(props) {
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={props.beer.image_url}
          style={{
            width: "30%",
            marginLeft: "auto",
            marginRight: "auto",
            objectFit: "scale-down",
          }}
        />
        <Card.Body>
          <Card.Title>{props.beer.name}</Card.Title>
          <Card.Text>{props.beer.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
