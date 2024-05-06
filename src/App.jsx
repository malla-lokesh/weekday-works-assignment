import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";

import "./App.css";
import { useState } from "react";
import JobPost from "./Components/JobPost";

function App() {
  const [roles, setRoles] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [companyName, setCompanyName] = useState("");

  return (
    <Box sx={{ flexGrow: 1 }} width={"80%"} margin={"auto"}>
      <Grid container spacing={6}>
        <Grid item container spacing={1} marginTop={"1rem"}>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <FormControl fullWidth>
              <InputLabel id="roles">Roles</InputLabel>
              <Select
                labelId="roles"
                value={roles}
                id="roles"
                label="roles"
                onChange={(e) => setRoles(e.target.value)}
              >
                <MenuItem value={"frontend"}>frontend</MenuItem>
                <MenuItem value={"ios"}>ios</MenuItem>
                <MenuItem value={"tech lead"}>tech lead</MenuItem>
                <MenuItem value={"android"}>android</MenuItem>
                <MenuItem value={"backend"}>backend</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <FormControl fullWidth>
              <InputLabel id="experience">Experience</InputLabel>
              <Select
                labelId="experience"
                id="experience"
                value={experience}
                label="experience"
                onChange={(e) => setExperience(e.target.value)}
              >
                <MenuItem value={"1"}>1</MenuItem>
                <MenuItem value={"2"}>2</MenuItem>
                <MenuItem value={"3"}>3</MenuItem>
                <MenuItem value={"4"}>4</MenuItem>
                <MenuItem value={"5"}>5</MenuItem>
                <MenuItem value={"6"}>6</MenuItem>
                <MenuItem value={"7"}>7</MenuItem>
                <MenuItem value={"8"}>8</MenuItem>
                <MenuItem value={"9"}>9</MenuItem>
                <MenuItem value={"10"}>10</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <FormControl fullWidth>
              <InputLabel id="location">location</InputLabel>
              <Select
                labelId="location"
                id="location"
                value={location}
                label="location"
                onChange={(e) => setLocation(e.target.value)}
              >
                <MenuItem value={"mumbai"}>Mumbai</MenuItem>
                <MenuItem value={"delhi ncr"}>delhi ncr</MenuItem>
                <MenuItem value={"remote"}>remote</MenuItem>
                <MenuItem value={"chennai"}>chennai</MenuItem>
                <MenuItem value={"bangalore"}>bangalore</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <FormControl fullWidth>
              <InputLabel id="salary">Minimum Base Pay Salary</InputLabel>
              <Select
                labelId="salary"
                id="salary"
                value={salary}
                label="Minimum Base Pay Salary"
                onChange={(e) => setSalary(e.target.value)}
              >
                <MenuItem value={"0"}>0</MenuItem>
                <MenuItem value={"10"}>10L</MenuItem>
                <MenuItem value={"20"}>20L</MenuItem>
                <MenuItem value={"30"}>30L</MenuItem>
                <MenuItem value={"40"}>40L</MenuItem>
                <MenuItem value={"50"}>50L</MenuItem>
                <MenuItem value={"60"}>60L</MenuItem>
                <MenuItem value={"70"}>70L</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                label={"companyName"}
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid item container spacing={2}>
          <JobPost />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
