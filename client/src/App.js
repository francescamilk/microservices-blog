import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

const App = () => {
    return (
        <div className="container pt-4">
            <h1>Create New Post</h1>
            <PostCreate />
            <hr />
            <h1>All Posts</h1>
            <PostList />
        </div>
    );
}

export default App;
