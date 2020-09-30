import React from 'react';
import { Cell, Grid } from 'react-mdl';
import '../App.css'
function About() {
    return (
        <div className="Banner">
            <Grid className="aboutGrid">
                <Cell col={6}>
                hello
                </Cell>
                 <Cell col={6}>
                hello 
                </Cell>
            </Grid>
        </div>
    )
}

export default About;