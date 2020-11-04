import React, { useEffect, useState } from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  // const { likePost, posts, commentOnPostOnEnterKey } = props;
  const { likePost, posts } = props;

  
// ------
  // const [ comments, setComments ] = useState([]);

  // const commentOnPostOnEnterKey = (evt, postId) => {
  //   if (evt.keyCode === 13) {
  //     const { value } = evt.target;
  //     setPosts(posts.map((post) => {
  //       if (post.id === postId){
  //         const josh = {...post.comments[(post.comments.length - 1)], 
  //           id: (post.comments[(post.comments.length - 1)].id + 1),
  //           username: "Josh",
  //           text: value
  //         };
  //         post.comments.push(josh);
  //         return post; 
  //       }else{
  //         return post;
  //       }
  //     }
  //     ));
  //   }
  // };
// ++++++

  return (
    <div className='posts-container-wrapper'>
      {
        posts.map((post) =>{
          return <Post post={post} likePost={likePost} key={post.id} />
          // return <Post post={post} likePost={likePost} commentOnPostOnEnterKey={commentOnPostOnEnterKey} key={post.id} />
        })
      }
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
