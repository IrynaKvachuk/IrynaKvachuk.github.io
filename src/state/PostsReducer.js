const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE-POST";

const initialState = {
  postsData: [
    {
      id: 1,
      icon: "https://www.flaticon.com/svg/static/icons/svg/2910/2910914.svg",
      content:
        "This is the day you will always remember as the day you almost caught Captain Jack Sparrow.",
      likesCount: 100,
    },
    {
      id: 2,
      icon: "https://www.flaticon.com/svg/static/icons/svg/2910/2910816.svg",
      content:
        "The problem is not the problem. The problem is your attitude about the problem.",
      likesCount: 10,
    },
    {
      id: 3,
      icon: "https://www.flaticon.com/svg/static/icons/svg/2476/2476190.svg",
      content:
        "Crazy people don't know they're crazy. I know I'm crazy, therefore I'm not crazy, isn't that crazy?",
      likesCount: 25,
    },
    {
      id: 4,
      icon: "https://www.flaticon.com/svg/static/icons/svg/2910/2910914.svg",
      content: "Not all treasure’s silver and gold, mate.",
      likesCount: 123,
    },
  ],
  newPostId: 5
};

const PostsReducer = (state = initialState, action) => {
  const addPostText = () => {
    const newPost = {
      id: state.newPostId,
      icon: "https://www.flaticon.com/svg/static/icons/svg/2910/2910914.svg",
      content: action.PostData,
      likesCount: 0,
    };
    return {
      ...state,
      postsData: [...state.postsData, newPost],
      newPostId: state.newPostId + 1,
    };
  };

  switch (action.type) {
    case ADD_POST:
      return addPostText();
    case DELETE_POST:
      return { ...state, postsData: state.postsData.filter(post => post.id !== action.postId) }
    default:
      return state;
  }
};

export const addPostAC = (PostData) => ({ type: ADD_POST, PostData });
export const deletePostAC = (postId) => ({ type: DELETE_POST, postId });

export default PostsReducer;
