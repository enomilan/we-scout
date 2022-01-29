import React from "react";
import pic1 from '../../images/scouting.png'
import './splash.css';
import { Typography } from "@material-ui/core";

const Splash = () => {


    return (

        <div className='container'>
            <div className='Main'>
                <div id='top'> <Typography> WeScout is a website where you can watch and scout players in the world of Association Football(Soccer).</Typography></div>
                <img id='pic1' src={pic1}></img>
                <div id='bottom'>Scout players from the top leagues, Premier League, Serie A, La Liga, Bundesliga, Ligue 1 and more.</div>
            </div>

        </div>

    )
}


export default Splash;