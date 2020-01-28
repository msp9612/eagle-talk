/* Dependencies */
/* -------------------------------*/

import React from 'react';
import { Table } from 'react-bootstrap';

/* Global variables and instances */
/* -------------------------------*/

const PeopleInRoomTable = props => {
	return (
		<Table size='sm'>
			<thead>
				<tr>
					<th>Status</th>
					<th>Name</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td></td>
					<td>Person A</td>
				</tr>
				<tr>
					<td></td>
					<td>Person B</td>
				</tr>
				<tr>
					<td></td>
					<td>Person C</td>
				</tr>
			</tbody>
		</Table>
	);
};

/* MAIN */
/* -------------------------------*/

export default PeopleInRoomTable;
