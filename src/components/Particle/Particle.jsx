import React from 'react'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {

    const particlesInit = useCallback(async engine => {
        console.log(engine);

        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

  return (
    <Particles id='tsparticles' init={particlesInit} 
    loaded={particlesLoaded} 
    options={{
        background: {
            color: {
                value: "#08070b",
            },
        },
        fpsLimit: 165,
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: "push",
                },
                onHover: {
                    enable: false,
                    mode: "repulse",
                },
                resize: false,
            },
            modes: {
                push: {
                    quantity: 1,
                },
                repulse: {
                    distance: 200,
                    duration: 0.1,
                },
            },
        },
        particles: {
            color: {
                value: "#2675FF",
            },
            links: {
                color: "#2675FF",
                distance: 0,
                enable: true,
                opacity: 0.1,
                width: 0.7,
            },
            collisions: {
                enable: true,
            },
            move: {
                directions: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 1000,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    }} />
  )
}

export default Particle