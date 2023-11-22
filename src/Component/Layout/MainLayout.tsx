import React, { ReactNode } from 'react';
import Navbar from './Navbar';

interface PropsMainLayout {
	children: ReactNode;
}
function MainLayout(props: PropsMainLayout) {
	return (
		<>
			<div className="sticky top-0 z-20">
				<Navbar />
			</div>
			{props.children}
		</>
	);
}

export default MainLayout;
