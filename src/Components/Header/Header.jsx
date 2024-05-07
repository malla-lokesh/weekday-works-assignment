import React from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { inputActions } from "../../Store/InputsSlice";

const Header = () => {
  const dispatch = useDispatch();
  const experience = useSelector((state) => state.input.experience);
  const companyName = useSelector((state) => state.input.companyName);
  const location = useSelector((state) => state.input.location);
  const jobType = useSelector((state) => state.input.jobType);
  const roles = useSelector((state) => state.input.roles);
  const minSalary = useSelector((state) => state.input.minSalary);

  return (
    <React.Fragment>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <FormControl fullWidth>
          <InputLabel id="experience">Experience</InputLabel>
          <Select
            labelId="experience"
            id="experience"
            value={experience}
            label="experience"
            onChange={(e) =>
              dispatch(inputActions.setExperience(e.target.value))
            }
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
          <TextField
            variant="outlined"
            label={"companyName"}
            value={companyName}
            onChange={(e) =>
              dispatch(inputActions.setCompanyName(e.target.value))
            }
          />
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
            onChange={(e) => dispatch(inputActions.setLocation(e.target.value))}
          >
            <MenuItem value={"mumbai"}>Mumbai</MenuItem>
            <MenuItem value={"delhi ncr"}>delhi ncr</MenuItem>
            <MenuItem value={"remote"}>remote</MenuItem>
            <MenuItem value={"chennai"}>chennai</MenuItem>
            <MenuItem value={"bangalore"}>bangalore</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {/* <Grid item xs={12} sm={6} md={4} lg={2}>
        <FormControl fullWidth>
          <InputLabel id="job type">Job Type</InputLabel>
          <Select
            labelId="job type"
            value={jobType}
            id="job type"
            label="job type"
            onChange={(e) => dispatch(inputActions.setJobType(e.target.value))}
          >
            <MenuItem value={"remote"}>Remote</MenuItem>
            <MenuItem value={"on-site"}>On-site</MenuItem>
          </Select>
        </FormControl>
      </Grid> */}
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <FormControl fullWidth>
          <InputLabel id="roles">Roles</InputLabel>
          <Select
            labelId="roles"
            value={roles}
            id="roles"
            label="roles"
            onChange={(e) => dispatch(inputActions.setRoles(e.target.value))}
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
          <InputLabel id="min base pay salary">Min Base Pay Salary</InputLabel>
          <Select
            labelId="min base pay salary"
            value={minSalary}
            id="min base pay salary"
            label="min base pay salary"
            onChange={(e) =>
              dispatch(inputActions.setMinSalary(e.target.value))
            }
          >
            <MenuItem value={"0"}>0</MenuItem>
            <MenuItem value={"10"}>10L</MenuItem>
            <MenuItem value={"20"}>20L</MenuItem>
            <MenuItem value={"30"}>30L</MenuItem>
            <MenuItem value={"40"}>40L</MenuItem>
            <MenuItem value={"50"}>50L</MenuItem>
            <MenuItem value={"60"}>60L</MenuItem>
            <MenuItem value={"70"}>70L</MenuItem>
            <MenuItem value={"80"}>80L</MenuItem>
            <MenuItem value={"90"}>90L</MenuItem>
            <MenuItem value={"100"}>100L</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </React.Fragment>
  );
};

export default Header;
