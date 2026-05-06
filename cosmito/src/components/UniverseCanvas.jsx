import { useEffect, useState } from 'react';

function UniverseCanvas({ hubble = 70 }) {

    
    const stars = Array.from({ length: 200 });

    
    const [galaxies, setGalaxies] = useState(() => {
        return Array.from({ length: 10 }, (_, index) => {

            const depth = 0.4 + Math.random() * 1.2;

            return {
                id: index,
                name: `GX-${1000 + index}`,
                type: "Spiral Galaxy",

                
                x: Math.random() * 90,
                y: Math.random() * 90,

                
                size: (40 + Math.random() * 30) * depth,
                opacity: 0.3 + (depth / 1.6) * 0.7,
                blur: depth < 0.8 ? (1 - depth) * 2 : 0,

                
                velocity: 0.2 + Math.random() * 0.5,

                depth: depth,
            };
        });
    });

    
    useEffect(() => {

        const interval = setInterval(() => {

            const expansionFactor = 0.0005 * (hubble / 70);

            setGalaxies((prevGalaxies) =>
                prevGalaxies.map((galaxy) => {

                    
                    const dx = galaxy.x - 50;
                    const dy = galaxy.y - 50;

                    return {
                        ...galaxy,

                        x: galaxy.x + dx * expansionFactor * galaxy.velocity,
                        y: galaxy.y + dy * expansionFactor * galaxy.velocity,
                    };
                })
            );

        }, 16);

        
        return () => clearInterval(interval);

    }, [hubble]);

    return (
        <div className="universe-container">

            
            {stars.map((_, index) => {

                const x = Math.random() * 100;
                const y = Math.random() * 100;
                const size = Math.random() * 2;

                return (
                    <div
                        key={index}
                        className="star"
                        style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            width: `${size}px`,
                            height: `${size}px`,
                        }}
                    />
                );
            })}

            
            {galaxies.map((galaxy) => {

                return (
                    <div
                        key={galaxy.id}
                        className="galaxy-wrapper"
                        style={{
                            left: `${galaxy.x}%`,
                            top: `${galaxy.y}%`,
                            opacity: galaxy.opacity,
                            zIndex: Math.round(galaxy.depth * 10),
                        }}
                    >

                        
                        <div
                            className="galaxy"
                            style={{
                                width: `${galaxy.size}px`,
                                height: `${galaxy.size}px`,
                                filter: `blur(${galaxy.blur}px)`,

                                boxShadow: `
                                    0 0 ${galaxy.size / 2}px rgba(125, 211, 252, 0.4),
                                    inset 0 0 ${galaxy.size / 4}px rgba(255,255,255,0.6)
                                `,
                            }}
                        />

                        
                        <div className="galaxy-label">

                            <h3>{galaxy.name}</h3>

                            <p>{galaxy.type}</p>

                            <span>
                                v = {galaxy.velocity.toFixed(2)}
                            </span>

                        </div>

                    </div>
                );
            })}

        </div>
    );
}

export default UniverseCanvas;