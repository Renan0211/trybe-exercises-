const INITIAL_STATE = {
  clients: {}
};

function createClient (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'CREATE_CLIENT':
      return {clients: action.clients};
    default: 
      return state;
  }
}

export default createClient;