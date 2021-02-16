import "./Messages.css";
import { addMessageAC } from "../../state/MessagesReducer";
import { connect } from "react-redux";
import { WithAuthRedirectComponent } from "../../hoc/WithAuthRedirect";
import Messages from "./Messages";
import { compose } from "redux";

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
