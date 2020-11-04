import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;
  console.log(comments);
  // console.log(comments);
  return (
    <div> 
      {
        comments.map((comment) => {
          return <Comment comment={comment} key={comment.id} />
          // return <><div key={comment.id}><b>{comment.username}</b> {comment.text}</div></>
          }
        )
      } 
    </div>
  );
};

export default Comments;
