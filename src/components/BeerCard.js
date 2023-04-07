import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";

export default function BeerCard(props) {
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={props.beer.image_url ?? "https://placehold.jp/250x250.png"}
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
          <NavLink
            className="text-decoration-none text-withe btn btn-dark"
            to={"/beer/" + props.beer.id} >
            More
          </NavLink>
        </Card.Body>
      </Card>
    </Col>
  );
}
