import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const InputGroup = ({
	name,
	placeholder,
	value,
	error,
	icon,
	onChange,
	autoComplete,
	minLength,
	maxLength
}) => {
	return (
		<div className="form-group">
			<div className="input-group-prepend">
				<span className="input-group-text">
					<i className={icon} />
				</span>
			</div>
			<input
				className={classnames('form-control form-control-lg', {
					'is-invalid': error
				})}
				placeholder={placeholder}
				name={name}
				autoComplete={autoComplete}
				value={value}
				onChange={onChange}
				minLength={minLength}
				maxLength={maxLength}
			/>
			{error && <div className="invalid-feedback">{error}</div>}
		</div>
	);
};

InputGroup.propTypes = {
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
	icon: PropTypes.string,
	error: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	autoComplete: PropTypes.string,
	minLength: PropTypes.string,
	maxLength: PropTypes.string
};

export default InputGroup;
