import React from "react";
import "./Messages.css";
import { NavLink, Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCr, requeired } from "../../utils/validators/validators";

const maxLength50 = maxLengthCr(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="message"
        component={Textarea}
        className="newContentArea"
        placeholder="type your text here.."
        validate={[requeired, maxLength50]}
      />
      <button type="submit" className="addBtn">
        Send
      </button>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({
  form: "messageAddForm",
})(AddMessageForm);

const Messages = ({ addMessage, dialogs, isAuth }) => {
  const addNewMessage = (AddMessageFormData) => {
    addMessage(AddMessageFormData.message);
  };
  const DialogContact = ({ id, name }) => {
    return <NavLink to={`/messages/${id}`}>{name}</NavLink>;
  };

  if (!isAuth) return <Redirect to={"/login"} />;
  return (
    <section className="messagesSection">
      <div className="dialogContacts">
        {dialogs.contacts.map((dialog) => (
          <DialogContact key={dialog.id} name={dialog.name} />
        ))}
      </div>
      <div className="dialogWindow">
        <div className="dialog">
          {dialogs.messages.map((dialog) => (
            <div className="message" key={dialog.id}>
              {/* <img src={icon} className="messageIcon" alt="avatar" /> */}
              <p className="messageText">{dialog.message}</p>
            </div>
          ))}
        </div>
        <section className="addSection">
          <AddMessageReduxForm onSubmit={addNewMessage} />
        </section>
      </div>
    </section>
  );
};

export default Messages;
