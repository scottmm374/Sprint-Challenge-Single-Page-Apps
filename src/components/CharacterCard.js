import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

export default function CharacterCard({ name, species, gender, origin, status }) {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle> Species: {species}</CardSubtitle>
          <CardSubtitle> Gender: {gender}</CardSubtitle>
          <CardSubtitle> Status: {status}</CardSubtitle>
          <CardSubtitle> Origin: {origin}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  )
}
