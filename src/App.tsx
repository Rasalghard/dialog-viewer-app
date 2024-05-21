import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./App.css";

import LeafletMap from "./leaflet-map/LeafletMap";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100%",
  width: "100%",
}));

const center = [51.505, -0.09];

function App() {
  return (
    <Box sx={{ flexGrow: 1, height: "100%" }}>
      <Grid container spacing={2} sx={{ height: "100%" }}>
        <Grid item xs={8}>
          <Item>
            <LeafletMap />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
