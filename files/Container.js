import {particles} from 'react-tsparticles';
import {loadFull} from 'tsparticles';
import React, { useCallback } from 'react';

const particlesContainer = () =>{
// init
const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
}, []);

const particlesLoad = useCallback(async ()=> {}, [] );

return( 
<particles
cassName='w-full h-full absolute translate-z-0'
    id='tsparticles'
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
        fullScreen: {enable: false},
        background: {
        color: {
            value: '',
        },
      },
      fpLimit: 120,
      interactivity: {
        events: {
            onClick:{
                enable: false,
                mode: 'push',
            },
            onHover:{
               enable: true,
               mode: 'repulse', 
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 90
            },
            repulse:{
                distance: 200,
                durations: 0.4,
            }
        }
      },
      particles: {
        color: {
            value: '#e68e2e',
        },
        Links: {
            color: '#f5d393',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
        },
        collisions: {
            enable: true,
        },move: {
            directions: 'none',
            enable: true,
            outModes: {
                default: 'bounce',
            },
            random: false,
            speed: 1,
            straight: false
        },
        number: {
            density: {
                enable: true,
                area: 800
            },
            value: 80
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: 'circle',
        },
        size: {
            value: {min: 1, ax: 5},
        },
      },
      detectRetina: true,
}}
/> 
)
}