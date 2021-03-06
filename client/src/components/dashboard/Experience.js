import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profileActions';

class Experience extends Component {
	onDeleteClick(id) {
		if (window.confirm('Are you sure you would like to delete?')) {
			this.props.deleteExperience(id);
		}
	}

	render() {
		const { experience } = this.props;
		let experiences;

		if (experience) {
			experiences = experience.map(exp => (
				<tr key={exp._id}>
					<td>{exp.company}</td>
					<td>{exp.title}</td>
					<td>
						<Moment format="YYYY/MM/DD">{exp.from}</Moment> -{' '}
						{exp.to ? <Moment format="YYYY/MM/DD">{exp.to}</Moment> : 'Now'}
					</td>
					<td>
						<button
							className="btn btn-danger"
							onClick={this.onDeleteClick.bind(this, exp._id)}
						>
							Delete
						</button>
					</td>
				</tr>
			));
		} else {
			experiences = 'No information';
		}

		return (
			<div>
				<h4 className="mb-4">Experience Credentials</h4>
				<table className="table">
					<thead>
						<tr>
							<th>Company</th>
							<th>Title</th>
							<th>Years</th>
							<th />
						</tr>
					</thead>
					<tbody>{experiences}</tbody>
				</table>
			</div>
		);
	}
}

Experience.propType = {
	deleteExperience: PropTypes.func.isRequired
};

export default connect(
	null,
	{ deleteExperience }
)(Experience);
