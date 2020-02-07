import React from "react";
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, 
} from 'reactstrap';

export default function CharacterCard(props) {
  return (
  
    <div className="card">
    <Card>
    <CardImg src={props.char.image} alt="Card image cap" />
    <CardBody>
    <CardTitle><h1>{props.char.name}</h1></CardTitle>
    <CardSubtitle><h2>{props.char.gender}</h2></CardSubtitle>
    <CardSubtitle><h2>{props.char.species}</h2></CardSubtitle>
    </CardBody>
    </Card>
  </div>
  )}
