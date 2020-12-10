import React from "react";
import "./ProfileInfo.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  toggleEditMode = () => {
    this.setState({ editMode: !this.state.editMode });
  };
  changeStatus = () => {
    this.toggleEditMode();
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }
  render() {
    return (
      <section>
        {this.state.editMode ? (
          <input
            autoFocus={true}
            onChange={(e) => this.onStatusChange(e)}
            onBlur={() => this.changeStatus()}
            type="text"
            value={this.state.status}
          />
        ) : (
          <span onClick={() => this.toggleEditMode()}>
            {this.props.status || "no status"}
          </span>
        )}
      </section>
    );
  }
}

export default ProfileStatus;
