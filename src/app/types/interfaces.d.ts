interface User {
    firstName: String;
    lastName: String;
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

interface UserApi {
    limit: number;
    skip: number;
    total: number;
    users: User[];

}
