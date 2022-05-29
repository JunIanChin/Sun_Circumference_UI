import './App.css';
import TextField from '@mui/material/TextField' 
import Grid from '@mui/material/Grid';
import GetPiButton from './components/GetPiBtn';
import ResetPiButton from './components/ResetPiBtn';
import { useState } from 'react';

function App() {
  const [piValue, setPiValue] = useState(0);
  const [sunCircumference, setSunCircumference] = useState(0);
  
  const updateDisplay = (updatedPiValue, updatedSunCircumference) => {
    setPiValue(updatedPiValue);
    setSunCircumference(updatedSunCircumference);
  }
  
  return (
    <div className="App">
      <Grid container rowSpacing={1} columnSpacing={3}>
        <Grid item xs={12}>
          <header>Naluri Space Project</header>
          <h1>Understanding The Sun Circumference</h1>
        </Grid>

        <Grid container columns={2} display="flex" direction="row" justifyContent="center" alignItems="center" marginTop={'50vmin'} item>
          <Grid item display="flex" direction="row" justifyContent="center" xs={6}>
            <TextField
              sx= {{
                bgcolor: '#fff',
                width: 1/2,
              }}
              className='piValue'
              id="filled-textarea"
              label="Value of Pi"
              value= {piValue}
              multiline
              variant="filled"
            />
          </Grid>
          <Grid item display="flex" direction="row" justifyContent="center" xs={6}>
            <TextField
              sx= {{
                bgcolor: '#fff',
                width: 1/2,
              }}
              className='sunCircumference'
              id="filled-textarea"
              label="Sun Circumference"
              value= {sunCircumference}
              multiline
              variant="filled"
            />
          </Grid>
        </Grid>  
        <Grid container columns={2} lg md display="flex" direction="row" justifyContent="center" alignItems="center" item xs={6}>
          <GetPiButton updateDisplay={updateDisplay}/>
          <ResetPiButton updateDisplay={updateDisplay}/>
        </Grid>

      </Grid>          
    </div>
  );
}

export default App;
