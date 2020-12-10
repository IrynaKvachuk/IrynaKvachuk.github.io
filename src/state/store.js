import MessagesReducer from "./MessagesReducer";
import PostsReducer from "./PostsReducer";

const store = {
    _callSubscriber() {
        console.log('no observers')
    },
    _state: {
        profile:
        {
            name: 'Jack',
            secondName: 'Sparrow',
            sex: 'male',
            familySituation: 'single',
            age: '35',
            homeTown: 'Sea',
            avatar: "https://www.flaticon.com/premium-icon/icons/svg/3106/3106921.svg",
            status: "Why Is The Rum Always Gone?"
        },
        posts: {
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
            newPostText: "",
            newPostId: 5
        },
        contacts: [
            {
                id: 1,
                name: "Hector Barbossa",
                avatar: "https://i.pinimg.com/236x/5e/cd/dd/5ecddd7652f705785ded20e49d758f81.jpg",
                content:
                    "For sure, you have to be lost to find a place that can't be found, elseways everyone would know where it was.",
            },
            {
                id: 2,
                name: "Joshamee Gibbs",
                avatar: "https://i.pinimg.com/originals/ba/75/c8/ba75c8239cc0d4d66e2250a366b2c5ba.jpg",
                content: "I'm sorry, Jack. But we've reached the end of the horizon.",
            },
            {
                id: 3,
                name: "Elizabeth Swann",
                avatar: "https://alchetron.com/cdn/elizabeth-swann-e1a65d27-6324-4890-b256-1d6f09984c5-resize-750.jpeg",
                content: "You like pain? Try wearing a corset!",
            },
            {
                id: 4,
                name: "Will Turner",
                avatar: "https://vignette4.wikia.nocookie.net/pirates/images/e/e1/AWEWillTurnerOneDayProfile.jpg/revision/latest?cb=20120416175043",
                content: "No cause is lost if there is but one fool left to fight for it.",
            },
        ],
        dialogs: {
            contacts: [
                { id: 1, name: "Hector Barbossa" },
                { id: 2, name: "Joshamee Gibbs" },
                { id: 3, name: "Elizabeth Swann" },
                { id: 4, name: "Will Turner" },
            ],
            messages: [
                { id: 1, message: "For sure, you have to be lost to find a place that can't be found, elseways everyone would know where it was." },
                { id: 2, message: "I'm sorry, Jack. But we've reached the end of the horizon." },
                { id: 3, message: "You like pain? Try wearing a corset!" },
                { id: 4, message: "No cause is lost if there is but one fool left to fight for it." }
            ],
            newMessageText: "",
            newMessageId: 5
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.posts = PostsReducer(this._state.posts, action);
        this._state.dialogs = MessagesReducer(this._state.dialogs, action);
        this._callSubscriber(this._state);
    }
}

export default store;