import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ChartComponent from "./diagrams";

export default function DiagramsCards() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <ChartComponent />
      </CardContent>
    </Card>
  );
}
