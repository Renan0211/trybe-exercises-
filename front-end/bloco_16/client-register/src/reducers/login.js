const INITIAL_STATE = {
  login: false
};

function login (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'LOGIN':
      return {login: action.login};
    default: 
      return state;
  }
}

export default login;