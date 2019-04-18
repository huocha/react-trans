import lang from '../translate';

const initialState = {
	translate: lang('en'),
	language: 'en'
};


export default (state = initialState, action ) => {
	switch(action.type){
	case 'CHANGE_LANGUAGE':
		state = {...state, translate: lang(action.payload), language: action.payload };
	}
	return state;
};
