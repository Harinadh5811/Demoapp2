import * as React from 'react';

import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { textAlign } from '@mui/system';
import '../App.css';
import { ComputerScience, Electrical, Mechanical, BioTech } from '../data'
import { useState } from 'react';

import { Button } from '@mui/material';

function Pricing() {

  const [dept, setDept] = useState(ComputerScience[0]);

  function handleCSE () {
    setDept(ComputerScience[0])
  }

  function handleECE () {
    setDept(Electrical[0])
  }

  function handleME () {
    setDept(Mechanical[0])
  }

  function handleBT () {
    setDept(BioTech[0])
  }

  return(
    <div>
      <div className='App-button'>
        <Button variant="outlined" onClick={handleCSE}>DELL</Button>
        <Button variant="outlined" onClick={handleECE}>Lenovo</Button>
        <Button variant="outlined" onClick={handleME}>MAC</Button>
        <Button variant="outlined" onClick={handleBT}>HP</Button>
      </div>
      <div className='App-img'>
        <img src={dept.imageUrl} style={{width: "300px", height: "200px"}} />
      </div>
      <div className='App-title'>
        <h4> {dept.displayName} </h4>
      </div>
      <div className='App-description'>
        <p> {dept.description} </p>
      </div>
      <div className='App-hod'>
        <b><i>{dept.hod}</i></b>
      </div>
      <div className='App-list'>
        <b> </b>
        <ul>
        {dept.programsOffered.map((course)=>(
          <li> {course} </li>
        ))}
        </ul>
        
      </div>
      <Grid item xs={12}>
  <FormControl style={{ width: '50%' }} required>
    <InputLabel id="warranty-label">Issue Type</InputLabel>
    <Select
      labelId="issue-label"
      id="issuetype"
      name="issuetype"
      defaultValue=""
    >
      <MenuItem value="">Select an option</MenuItem>
      <MenuItem value="Software Issue">Software Issue</MenuItem>
      <MenuItem value="Hardware Issue">Hardware Issue</MenuItem>
    </Select>
  </FormControl>
</Grid>


    </div>
  );
}

export default Pricing;
