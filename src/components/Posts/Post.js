import React from 'react';
import Comments from '../Comments/Comments';
import CommentBar from '../Comments/CommentBar';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { post, likePost } = props;
  // const { post, likePost, commentOnPostOnEnterKey } = props;

  return (
    <div className='post-border'>
      <PostHeader
        username={post.username}
        thumbnailUrl={post.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={post.imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection likePost={() => likePost(post.id)} numberOfLikes={post.likes} />
      <CommentBar postId={post.id} comments={post.comments} />
      {/* <CommentBar commentOnPostOnEnterKey={commentOnPostOnEnterKey} postId={post.id} comments={post.comments} /> */}
      {/* Comments also wants its props! */}
      {/* <Comments comments={post.comments} /> */}
    </div>
  );
};

export default Post;
