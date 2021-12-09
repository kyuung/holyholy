import React from 'react';
import { useBox } from 'use-cannon';

const Decoration = () => {
	const [ref] = useBox(() => ({ mass: 10, position: [0, 300, 0] }));
	return (
		<>
			<mesh
				position={[0, 300, 0]}
				scale={[5, 5, 5]}
				rotation={[0, 44, 0]}
				ref={ref}
			>
				<sphereBufferGeometry attach="geometry" />
				<meshLambertMaterial attach="material" color="#EA4630" />
			</mesh>
			<mesh
				position={[55, 125, 50]}
				scale={[5, 5, 5]}
				rotation={[0, 44, 0]}
				ref={ref}
			>
				<sphereBufferGeometry attach="geometry" />
				<meshLambertMaterial attach="material" color="#EA4630" />
			</mesh>
			<mesh
				position={[55, 125, 100]}
				scale={[5, 5, 5]}
				rotation={[0, 44, 0]}
				ref={ref}
			>
				<sphereBufferGeometry attach="geometry" />
				<meshLambertMaterial attach="material" color="#EA4630" />
			</mesh>
			<mesh
				position={[55, 75, 100]}
				scale={[5, 5, 5]}
				rotation={[0, 44, 0]}
				ref={ref}
			>
				<sphereBufferGeometry attach="geometry" />
				<meshLambertMaterial attach="material" color="#EA4630" />
			</mesh>
		</>
	);
};

export default Decoration;
