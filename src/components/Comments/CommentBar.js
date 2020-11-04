// You do not need to change any code in this file for MVP
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faCircle, faCompass } from '@fortawesome/free-regular-svg-icons';
import Comments from '../Comments/Comments';

import "./CommentBar.css";

const CommentBar = (props) => {
    const { commentOnPostOnEnterKey, postId, comments } = props;
    return (
        <>
        <div className="search-bar-wrapper">
        <form className="search-form">
            <input
            type="text"
            placeholder="Comment"
            onKeyDown={(evt) => commentOnPostOnEnterKey(evt, postId)}
            />
        </form>
        </div>
        <Comments comments={comments} />
        </>
    );
};

export default CommentBar;
