import React from 'react';

const CommentList = ({ comments }) => {
    const renderedComments = comments.map(comment => {
        let content;

        switch (comment.status) {
        case 'approved':
            content = comment.content;
            break;
        case 'rejected':
            content = 'This comment has been banned.';
            break;
        default:
            content = 'Comment awaiting moderation.';
        }

        return (
            <li key={comment.id}>
                {content}
            </li>
        );
    });

    return (
        <div>
            <ul>
                {renderedComments}
            </ul>
        </div>
    );
}

export default CommentList
