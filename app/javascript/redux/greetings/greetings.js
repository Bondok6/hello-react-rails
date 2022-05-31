const initState = '';

const greetingReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_GREETING':
      return action.payload;
    default:
      return state;
  }
};

export const fetchgreeting = () => async (dispatch) => {
  await fetch('/api/greetings')
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: 'GET_GREETING', payload: data });
    });
};

export default greetingReducer;
