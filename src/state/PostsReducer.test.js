
const { addPostAC, deletePostAC, default: PostsReducer } = require("./PostsReducer");
const { default: ProfileReducer } = require("./ProfileReducer");

const state = {
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

it('posts length should be incremented', () => {

    //1.test data
    const action = addPostAC('blablabla');

    //2.action
    const newState = PostsReducer(state, action);

    //3. expectation
    expect(newState.postsData.length).toBe(5);
})
it('new post message should be "checked added post content"', () => {

    //1.test data
    const action = addPostAC('checked added post content');

    //2.action
    const newState = PostsReducer(state, action);

    //3. expectation
    expect(newState.postsData[4].content).toBe("checked added post content");
})
it('delete - length of postData should be decremented', () => {

    //1.test data
    const action = deletePostAC(1);

    //2.action
    const newState = PostsReducer(state, action);

    //3. expectation
    expect(newState.postsData.length).toBe(3);
})
it('delete - if id is NOT correct, length of postData should NOT be decremented', () => {

    //1.test data
    const action = deletePostAC(100);

    //2.action
    const newState = PostsReducer(state, action);

    //3. expectation
    expect(newState.postsData.length).toBe(4);
})