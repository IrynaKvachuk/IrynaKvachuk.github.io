import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";
import {
  getUserProfileThunkCr,
  getUserStatusThunkCr,
  updateUserStatusThunkCr,
} from "../../state/ProfileReducer";
// import { WithAuthRedirectComponent } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfileThunkCr(userId);
    this.props.getUserStatusThunkCr(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        isAuth={this.props.isAuth}
        status={this.props.status}
        updateStatus={this.props.updateUserStatusThunkCr}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    status: state.profile.status,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, {
    getUserProfileThunkCr,
    getUserStatusThunkCr,
    updateUserStatusThunkCr,
  }),
  withRouter
  // WithAuthRedirectComponent
)(ProfileContainer);
