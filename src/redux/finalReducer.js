const INITIAL_STATE = {
  id: null,
  choice: "",
  otherPlayer: {
    id: null,
    choice: "",
  },
  winner: "",
};

const finalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_CHOICE': {
      return {
        ...state,
        choice: action.choice,
      }
    }
    case 'UPDATE_ID': {
      return {
        ...state,
        id: action.id,
      }
    }
    case 'UPDATE_OTHER_PLAYER': {
      return {
        ...state,
        otherPlayer: action.otherPlayer,
      }
    }
    case 'UPDATE_WINNER': {
      return {
        ...state,
        winner: action.winner
      }
    }
    default:
      return state;
  }
};

export default finalReducer;