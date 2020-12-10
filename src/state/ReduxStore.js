import { applyMiddleware, combineReducers, createStore } from "redux";
import PostsReducer from "./PostsReducer";
import MessagesReducer from "./MessagesReducer";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";
import ProfileReducer from "./ProfileReducer";
import ProfileInfoReducer from "./ProfileInfoReducer";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import AppReducer from "./AppReducer";


const reducers = combineReducers({
  app: AppReducer,
  form: formReducer,
  auth: AuthReducer,
  profileInfo: ProfileInfoReducer,
  profile: ProfileReducer,
  posts: PostsReducer,
  dialogs: MessagesReducer,
  users: UsersReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;
