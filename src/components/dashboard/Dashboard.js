import './Dashboard.css';
import React from 'react';
import Algorithm from '../algorithm/Algorithm';
import { Link } from 'react-router-dom';

function Dashboard({ categories, inCategory }) {
	return (
		<div className='Dashboard'>
			{categories.map((category) => (
				<Link className='Link' to={category.path}>
					<Algorithm
						title={category.title}
						description={category.description}
						key={category.title}
						width={320}
						height={220}
						inCategory={inCategory}
					/>
				</Link>
			))}
		</div>
	);
}

export default Dashboard;
