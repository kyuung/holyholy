import React from 'react';

const SubTree = () => {
	return (
		<>
			<mesh position={[0, 220, 0]} scale={[22, 50, 22]}>
				<octahedronBufferGeometry attach="geometry" />
				<meshLambertMaterial attach="material" color="#F8B229" />
			</mesh>
			<mesh
				position={[0, 40, 0]}
				scale={[130, 20, 145]}
				rotation={[0, 10, 0]}
			>
				<dodecahedronBufferGeometry attach="geometry" />
				<meshLambertMaterial attach="material" color="#146B3A" />
			</mesh>
			<mesh
				position={[0, 85, 0]}
				scale={[105, 18, 114]}
				rotation={[0, 44, 0]}
			>
				<dodecahedronBufferGeometry attach="geometry" />
				<meshLambertMaterial attach="material" color="#146B3A" />
			</mesh>
			<mesh
				position={[0, 135, 0]}
				scale={[83, 15, 78]}
				rotation={[0, 26, 0]}
			>
				<dodecahedronBufferGeometry attach="geometry" />
				<meshLambertMaterial attach="material" color="#146B3A" />
			</mesh>
			<mesh
				position={[0, 180, 0]}
				scale={[50, 15, 55]}
				rotation={[0, 77, 0]}
			>
				<dodecahedronBufferGeometry attach="geometry" />
				<meshLambertMaterial attach="material" color="#146B3A" />
			</mesh>
		</>
	);
};

export default SubTree;
