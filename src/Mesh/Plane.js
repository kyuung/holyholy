import React from 'react';
import { usePlane } from 'use-cannon';

const Plane = () => {
	const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
	return (
		<>
			<mesh
				scale={[3, 3, 40]}
				position={[0, -10, 0]}
				rotation={[-Math.PI / 2, 0, 0]}
			>
				<boxBufferGeometry attach="geometry" args={[100, 100]} />
				<meshLambertMaterial attach="material" color="lightblue" />
			</mesh>
		</>
	);
};

export default Plane;
