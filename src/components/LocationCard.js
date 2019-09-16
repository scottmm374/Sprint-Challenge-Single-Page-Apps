import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export default function LocationCard({ name, type, dimension }) {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle> Type: {type}</CardSubtitle>
          <CardSubtitle> Dimensions: {dimension}</CardSubtitle>

        </CardBody>
      </Card>
    </div>
  )
}

