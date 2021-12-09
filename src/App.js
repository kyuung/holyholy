import React from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Stars, PerspectiveCamera } from 'drei';
import Tree from './Mesh/Tree';
import SubTree from './Mesh/SubTree';
import Plane from './Mesh/Plane';
import Decoration from './Mesh/Decoration';
import { useBox, Physics } from 'use-cannon';

const App = () => {
	return (
		<div
			style={{
				width: '100vw',
				height: '100vh',
				backgroundColor: 'black',
			}}
		>
			<Canvas>
				<PerspectiveCamera
					position={[0, -40, -550]}
					rotation={[0.6, 12.2, 0]}
				>
					<Stars />
					<ambientLight intensity={0.5} />
					<spotLight position={[10, 15, 10]} angle={0.8} />
					<Physics>
						<Tree />
						<SubTree />
						<Plane />
						<Decoration />
					</Physics>
				</PerspectiveCamera>
			</Canvas>
		</div>
	);
};

export default App;
