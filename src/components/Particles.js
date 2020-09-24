import Particle from 'react-particles-js'
import React from 'react'

const Particles=() =>(
    <Particle
            params={{
              particles: {
                color: {
                  value: "#ffffff"
                },
                line_linked: {
                  color: {
                    value: "#ffffff"
                  }
                },
                number: {
                  value: 60
                },
                size: {
                  value: 3
                }
              }
            }}/>
);
export default Particles;