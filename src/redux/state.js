let state = {
    profilePage: {
        postsData: [
            {id: 1, message: "First post", likesCount: 16},
            {id: 2, message: "Second post", likesCount: 23},
            {id: 3, message: "Third post", likesCount: 42}
        ]
    },

    messagesPage: {
        dialogsData: [
            {id: 1, name: "Michael"},
            {id: 2, name: "Jim"},
            {id: 3, name: "Dwight"},
            {id: 4, name: "Oscar"},
            {id: 5, name: "Stanley"},
            {id: 6, name: "Creed"}
        ],
        messagesData: [
            {id: 1, message: "Hoooo...", dir: "in"},
            {id: 2, message: "...ooooh...", dir: "out"},
            {id: 3, message: "...ooooh...", dir: "in"},
            {id: 4, message: "...ooooh...", dir: "out"},
            {id: 5, message: "...ooooh...", dir: "in"},
            {id: 6, message: "...boi...", dir: "out"}
        ]
    },

    sitebar: [
        {id: 1, name: "Michael", imgSrc: "michael"},
        {id: 2, name: "Jim", imgSrc: "jim"},
        {id: 3, name: "Dwight", imgSrc: "dwight"}
    ]
}

export default state;