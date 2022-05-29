import { Button } from "@mui/material";
import React from "react";
import {resetPiPrecision} from "../services/resetPiPrecision";

function ResetPiButton({updateDisplay}){
    function resetPi() {
        resetPiPrecision('/reset_pi')
        .then(()=> {updateDisplay(3, '4.1781 million km')})
        .catch((err)=> {
            updateDisplay('Something went wrong');
            console.log(err);
        }) 
    }
    return (
        <Button sx={{width: 1/4}} className= 'resetPiPrecision' variant="contained" onClick={resetPi} >Reset Pi Precision</Button>
    ); 
}

export default ResetPiButton;