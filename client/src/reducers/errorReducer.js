import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
	switch (action.type) {
		case (GET_ERRORS, CLEAR_ERRORS):
			return action.payload;
		default:
			return state;
	}
};
