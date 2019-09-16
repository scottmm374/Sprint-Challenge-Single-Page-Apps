import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

export default function CharacterCard({ name, species, gender }) {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle> Species: {species}</CardSubtitle>
          <CardSubtitle> Gender: {gender}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  )
}
