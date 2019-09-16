import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

export default function EpisodeCard({ name, airDate, episode }) {
  return(
    <div>
      <Card>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle> Air Date: {airDate}</CardSubtitle>
          <CardSubtitle> Episode: {episode}</CardSubtitle>
        </CardBody>
      </Card>
    </div>

  ) 
}