import React, { useState } from "react";
import "./poll.css";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import LikeIcon from "./../../assets/like.png";
import AvatarIcon from "./../../assets/profile.png";

const useStyles = makeStyles((theme) => ({
  commentRow: {
    marginBottom: "10px",
    width: "85%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "8%",
  },
  avatar: {
    marginRight: "0px",
  },
  text: {
    fontFamily: "Futura",
    width: "90%",
    marginRight: "0px",
    marginLeft: "10px",
    textAlign: "left",
  },
  likeGroup: {
    width: "10%",
    marginLeft: "0px",
    marginRight: "10px",
    marginTop: "10px",
  },
  likeNum: {
    fontSize: "9px",
    marginTop: "0px",
    textAlign: "center",
  },
  likeIcon: {
    padding: "0",
    marginBottom: "0px",
  },
  likeNumLiked: {
    color: "red",
    fontSize: "9px",
    marginTop: "0px",
    textAlign: "center",
  },
}));

export default function Comment(props) {
  const classes = useStyles();

  const comment = props.comment;
  const [likesChanged, setLikesChanged] = useState(false);

  const clickHandler = (e) => {
    setLikesChanged(!likesChanged);
    //todo: triggers backend function
  };

  // this handles when the user likes
  if (likesChanged == true) {
    const newLikes = comment.likes + 1;
    return (
      <div className={classes.commentRow}>
        <img className={classes.avatar} src={AvatarIcon} alr='' />
        <p className={classes.text}>{comment.text}</p>
        <div className={classes.likeGroup} onClick={clickHandler}>
          <img className={classes.likeIcon} src={LikeIcon} />
          <p className={classes.likeNumLiked}>{newLikes}</p>
        </div>
      </div>
    );
  }

  // this handles when the user likes and unlikes or just hasnt liked
  return (
    <div className={classes.commentRow}>
      <img className={classes.avatar} src={AvatarIcon} alr='' />
      <p className={classes.text}>{comment.text}</p>
      <div className={classes.likeGroup} onClick={clickHandler}>
        <img className={classes.likeIcon} src={LikeIcon} />
        <p className={classes.likeNum} id='numLikes'>
          {comment.likes}
        </p>
      </div>
    </div>
  );
}
