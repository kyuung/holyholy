import React from 'react';

const Tree = () => {
	return (
		<mesh position={[0, 120, 0]} scale={[150, 280, 150]}>
			<coneBufferGeometry attach="geometry" />
			<meshLambertMaterial attach="material" color="#165B33" />
		</mesh>
	);
};

export default Tree;
