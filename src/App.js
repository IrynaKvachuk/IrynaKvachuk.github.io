import React, { lazy } from 'react';
import { compose } from 'redux';
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Contacts from './components/Contacts/Contacts';
import PostsContainer from './components/Posts/PostsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { initializeAppThunkCr } from './state/AppReducer';
import Loader from './components/common/Loader/Loader';
import './App.css';
import { WithSuspense } from './hoc/WithSuspense';

const MessagesContainer = lazy(() => import('./components/Messages/MessagesContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeAppThunkCr();
  }
  render() {
    if (!this.props.initialized) {
      return <Loader />
    }
    return (
      <div className="App">
        <div className="menuWrapper">
          <HeaderContainer />
          <Navbar />
        </div>
        <div className="contentWrapper">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/posts" render={() => <PostsContainer />} />
          <Route path="/contacts" render={() => <Contacts />} />
          <Route path="/messages" render={ WithSuspense(MessagesContainer)} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeAppThunkCr }))(App);
