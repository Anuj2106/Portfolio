import React, { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";

function Particle() {
  const particlesInit = useCallback(async (engine) => {
    await loadAll(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#0d0d0d", // Dark night background
          },
        },
        particles: {
          number: {
            value: 600,
            density: {
              enable: true,
              value_area: 1200,
            },
          },
          color: {
            value: "#e0e0e0", // Light gray stars
          },
          shape: {
            type: "circle", // Circle shape for star-like look
            stroke: {
              width: 0,
              color: "#000000", // Black stroke for circles
            },
            polygon: {
              nb_sides: 3, // Triangular shape
            },
            image: {
              src: "img/github.svg", // Image for particles
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.5,
            random: true,
            animation: {
              enable: true,
              speed: 2,
              opacity_min: 0.32,
              sync: false,
            },
          },
          size: {
            value: 2, // Size of the particles
            random: false,
            animation: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: false, // No lines linking particles
            distance: 150,
            color: "#ffffff", // White color for linking lines (disabled)
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: false, // Particles don't move
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "repulse", // Repulse effect on hover
            },
            onclick: {
              enable: true,
              mode: "push", // Push effect on click
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true, // Retina support for better resolution
      }}
    />
  );
}

export default Particle;
