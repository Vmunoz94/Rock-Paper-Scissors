export const updateChoice = choice => {
  return {
    type: 'UPDATE_CHOICE',
    choice,
  };
};

export const updateId = id => {
  return{
    type: 'UPDATE_ID',
    id,
  };
};

export const updateOtherPlayer = otherPlayer => {
  return{
    type: 'UPDATE_OTHER_PLAYER',
    otherPlayer,
  };
};

export const updateWinner = winner => {
  return{
    type: 'UPDATE_WINNER',
    winner,
  };
};
