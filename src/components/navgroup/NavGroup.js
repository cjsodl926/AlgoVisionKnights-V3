import React from 'react';
import './NavGroup.css';
import { Link } from 'react-router-dom';

// Material UI
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	ListItem,
	ListItemText,
} from '@material-ui/core';

// Child Components
import NavLink from '../navlink/NavLink';

function NavGroup({
	title,
	group,
	panel,
	expanded,
	handleChange,
	setPage,
	setAlgoPage,
}) {
	return (
		<Accordion
			id='nav-group'
			expanded={expanded === panel}
			onChange={handleChange(panel)}>
			<ListItem id='nav-group-button' button>
				<AccordionSummary id='accordion-summary'>
					<ListItemText
						id='nav-item-text'
						style={{
							color: expanded === panel ? '#ff335c' : '#ffffff',
						}}>
						{title}
					</ListItemText>
				</AccordionSummary>
			</ListItem>
			<AccordionDetails id='accordion-details' ref={React.createRef()}>
				{group.map((name) => (
					<Link className='Link' to='/algorithm'>
						<NavLink
							name={name}
							key={name}
							setPage={setPage}
							setAlgoPage={setAlgoPage}
						/>
					</Link>
				))}
			</AccordionDetails>
		</Accordion>
	);
}

export default NavGroup;
