import { Box, Grid } from "@mui/material";

import "./App.css";
import Posts from "./Components/JobPosts/Posts";
import Header from "./Components/Header/Header";

function App() {
  return (
    <Box sx={{ flexGrow: 1 }} width={"80%"} margin={"auto"}>
      <Grid container spacing={6}>
        <Grid item container spacing={1} marginTop={"1rem"}>
          <Header />
        </Grid>
        <Grid item container spacing={2} marginLeft={"0rem"}>
          <Posts />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
