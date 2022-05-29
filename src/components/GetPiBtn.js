import { Button } from "@mui/material";
import React from "react";
import {getPiPrecision} from "../services/getPiPrecision";

function GetPiButton({updateDisplay}){
    function getPi() {
        getPiPrecision('/get_next_pi')
        .then((data) => { updateDisplay(data.pi, `${data.circumference} million km`)})
        .catch((err) => console.log(err));
    }
    return (
        <Button sx={{width: 1/4}} className= 'getPiPrecision' variant="contained" onClick={getPi} >Get Pi Precision</Button>
    ); 
}

export default GetPiButton;