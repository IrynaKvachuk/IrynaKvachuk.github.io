import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleIsFollowingProgress,
  getUsersThunkCreator,
  followThunkCreator,
  unfollowThunkCreator,
} from "../../state/UsersReducer";
import Loader from "../common/Loader/Loader";
import { compose } from "redux";
import {
  getPageSize,
  getUsers,
  getTotalUsersCount,
  getCurrentPage,
  getIsLoading,
  getFollowingInProgress,
} from "../../state/selectors/UsersSelectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    const { getUsersThunkCreator, currentPage, pageSize } = this.props;
    getUsersThunkCreator(currentPage, pageSize);
  }

  onPageChanged = (pageNumber) => {
    const { getUsersThunkCreator, pageSize, setCurrentPage } = this.props;
    getUsersThunkCreator(pageNumber, pageSize);
    setCurrentPage(pageNumber);
  };

  render() {
    return (
      <>
        {this.props.isLoading && <Loader />}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
          followThunkCreator={this.props.followThunkCreator}
          unfollowThunkCreator={this.props.unfollowThunkCreator}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isLoading: getIsLoading(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFollowingProgress,
    getUsersThunkCreator,
    followThunkCreator,
    unfollowThunkCreator,
  })
)(UsersContainer);

// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//   };
// };
