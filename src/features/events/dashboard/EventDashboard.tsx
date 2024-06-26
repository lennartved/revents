import { Grid, GridColumn } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../form/EventForm";
import { sampleData } from "../../../app/api/sampleData";

export default function EventDashboard() {
  return (
    <Grid>
      
      <Grid.Column width={10}>
        <EventList events={sampleData}/>
      </Grid.Column>
      <Grid.Column width={6}>
        <EventForm/>
      </Grid.Column> 

    </Grid>
  )
}