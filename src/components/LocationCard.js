import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle> Type: {type}</CardSubtitle>
          <CardSubtitle> Dimensions: {dimension}</CardSubtitle>
          <CardSubtitle> Residents: {residents}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  )
}

