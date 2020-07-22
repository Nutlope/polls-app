import React, { useState } from "react";
import "./poll.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import commenter from "./../../assets/commenter.png";
import SendIcon from "./../../assets/send.png";
import SendActivatedIcon from "./../../assets/sendActivated.png";

const useStyles = makeStyles((theme) => ({
  commentBox: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    bottom: "10px",
  },
  comment: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: "12.5px",
    marginBottom: "-10px",
  },
  commenter: {
    width: "30px",
    height: "28px",
    marginRight: "10px",
  },
  viewAll: {
    color: "#E71D36",
    textDecoration: "underline",
    marginBottom: "10px",
  },
  typeComment: {
    bottom: "0px",
    borderRadius: "20px",
    width: "84%",
  },
  sendIcon: {
    height: "25px",
  },
  send: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

function renderComments(comments, classes) {
  const len = comments.length;

  // one comment occupies two lines, only display one
  if (len === 1 || comments[0].length >= "50") {
    return (
      <div className={classes.comment}>
        <img src={commenter} className={classes.commenter} alt='' />
        <p>{comments[0]}</p>
      </div>
    );
  }
  // one comment occupies two lines, only display one
  if (comments[1].length >= "50") {
    return (
      <div className={classes.comment}>
        <img src={commenter} className={classes.commenter} alt='' />
        <p>{comments[1]}</p>
      </div>
    );
  }

  return (
    <div>
      <div className={classes.comment}>
        <img src={commenter} className={classes.commenter} />
        <p>{comments[0]}</p>
      </div>
      <div className={classes.comment}>
        <img src={commenter} className={classes.commenter} alt='' />
        <p>{comments[1]}</p>
      </div>
    </div>
  );
}

export default function Comments(props) {
  const classes = useStyles();
  const existingComments = renderComments(props.comments, classes);
  const [activatedIcon, setActivatedIcon] = useState(false);

  const inputHandler = (e) => {
    if (e.target.value == "") {
      setActivatedIcon(false);
    } else {
      setActivatedIcon(true);
    }
  };

  const sendHandler = (e) => {
    //todo
  };

  return (
    <div className={classes.commentBox}>
      {existingComments}
      <div className={classes.viewAll} onClick={props.setCommentOpen}>
        View all comments &gt;
      </div>
      <div className={classes.send}>
        <TextField
          className={classes.typeComment}
          variant='outlined'
          placeholder='Write a comment...'
          onChange={inputHandler}
        />
        {activatedIcon ? (
          <img
            className={classes.sendIcon}
            src={SendActivatedIcon}
            alt='send'
            onClick={sendHandler}
          />
        ) : (
          <img className={classes.sendIcon} src={SendIcon} alt='send' />
        )}{" "}
      </div>
    </div>
  );
}
