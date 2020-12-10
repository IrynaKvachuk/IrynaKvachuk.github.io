const ADD_MESSAGE = "ADD-MESSAGE";

const initialState = {
  contacts: [
    { id: 1, name: "Hector Barbossa" },
    { id: 2, name: "Joshamee Gibbs" },
    { id: 3, name: "Elizabeth Swann" },
    { id: 4, name: "Will Turner" },
  ],
  messages: [
    {
      id: 1,
      message:
        "For sure, you have to be lost to find a place that can't be found, elseways everyone would know where it was.",
    },
    {
      id: 2,
      message: "I'm sorry, Jack. But we've reached the end of the horizon.",
    },
    { id: 3, message: "You like pain? Try wearing a corset!" },
    {
      id: 4,
      message:
        "No cause is lost if there is but one fool left to fight for it.",
    },
  ],
  lastMessageId: 4,
};

const MessagesReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      state.lastMessageId += 1;
      return {
        ...state,
        messages: [...state.messages, { id: state.lastMessageId, message: action.messageBody }]
      };
    default:
      return state;
  }
};

export const addMessageAC = (messageBody) => ({ type: ADD_MESSAGE, messageBody });

export default MessagesReducer;
