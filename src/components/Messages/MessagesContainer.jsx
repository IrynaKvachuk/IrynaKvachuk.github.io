import React from "react";
import "./Messages.css";
import { addMessageAC } from "../../state/MessagesReducer";
import { connect } from "react-redux";
import { WithAuthRedirectComponent } from "../../hoc/WithAuthRedirect";
import Messages from "./Messages";
import { compose } from "redux";

// const MessagesContainer = ({ store }) => {
//   const state = store.getState().dialogs;
//   const onMessageChange = (text) => {
//     store.dispatch(updateNewMessageTextActionCreator(text));
//   };
//   const addMessage = () => {
//     store.dispatch(addMessageActionCreator());
//   };

//   return (
//     <Messages
//       updateNewMessageText={onMessageChange}
//       addMessage={addMessage}
//       dialogs={state}
//       newMessageText={state.newMessageText}
//     />
//   );
// };

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (messageBody) => {
      dispatch(addMessageAC(messageBody));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirectComponent
)(Messages);
