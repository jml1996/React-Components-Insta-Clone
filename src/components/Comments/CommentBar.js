// You do not need to change any code in this file for MVP
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faCircle, faCompass } from '@fortawesome/free-regular-svg-icons';
import Comments from '../Comments/Comments';

import "./CommentBar.css";

const CommentBar = (props) => {
    // const { commentOnPostOnEnterKey, postId, comments } = props;
    const { postId, comments } = props;
    const [ com, setCom ] = useState(comments);

    console.log(comments);
    // console.log(com);

    
    const commentOnPostOnEnterKey = (evt, postId) => {
        
        if (evt.keyCode === 13) {
            // debugger;
            evt.preventDefault();

          const { value } = evt.target;
          const josh = {...com[(com.length - 1)], 
            id: (com[(com.length - 1)].id + 1),
            username: "Josh",
            text: value
          };
            setCom([...com, josh]);
        }else{
            setCom(com);
            console.log(com);
        }
      };

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
        <Comments comments={com} />
        </>
    );
};

export default CommentBar;
