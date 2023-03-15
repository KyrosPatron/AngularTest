interface User {
    name: String;
    surname: String;
    age: number;
}

interface Post {
    title: String;
    author: User;
    message: String;
    comments: Commento[];
}

interface Commento {
    author: User;
    message: String;
}
