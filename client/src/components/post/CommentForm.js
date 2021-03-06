import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../actions/postActions';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';

class CommentForm extends Component {
	state = {
		errors: {},
		text: ''
	};

	updateState = (key, value) =>
		this.setState((prevState, props) => (prevState[key] = value));

	onChange = ({ target }) => this.updateState(target.name, target.value);

	onSubmit = e => {
		e.preventDefault();
		const { text } = this.state;
		const { avatar, name } = this.props.auth.user;
		const { postId } = this.props;

		const newComment = {
			avatar,
			name,
			text
		};

		this.props.addComment(postId, newComment);
		this.updateState('text', '');
	};

	componentDidUpdate(prevProps, prevState) {
		const { errors } = this.props;

		if (prevProps.errors !== errors) {
			this.setState({ errors });
		}
	}

	render() {
		const { errors, text } = this.state;

		return (
			<div className="post-form mb-3">
				<div className="card card-info">
					<div className="card-header bg-info text-white">
						Make a comment...
					</div>
					<div className="card-body">
						<form onSubmit={this.onSubmit}>
							<div className="form-group">
								<TextAreaFieldGroup
									error={errors.text}
									name="text"
									onChange={this.onChange}
									placeholder="Reply to post"
									value={text}
								/>
							</div>
							<button className="btn btn-dark" type="submit">
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

CommentForm.propTypes = {
	addComment: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
	postId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{ addComment }
)(CommentForm);
