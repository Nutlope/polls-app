import React, { useState } from "react";
import "./trending.css";
import { makeStyles } from "@material-ui/core/styles";
import { Container, CssBaseline } from "@material-ui/core";
import BackIcon from "./../../assets/back.png";
import TextField from "@material-ui/core/TextField";
import Comment from "./Comment";
import ScrollContainer from "react-indiana-drag-scroll";
import SendIcon from "./../../assets/send.png";
import SendActivatedIcon from "./../../assets/sendActivated.png";

const useStyle = makeStyles((theme) => ({
  paper: {
    fontFamily: "Futura",
    border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    height: "700px", //TODO: set hight to be phone height
  },
  topBar: {
    height: "7%",
    fontFamily: "Futura",
    fontSize: "18px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginBottom: "20px",
    position: "relative",
  },
  backIcon: {
    position: "absolute",
    left: "20px",
    top: "15px",
    width: "20px",
  },
  commentScroll: {
    height: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    position: "absolute",
    bottom: "70px",
  },
  commentBar: {
    width: "100%",
    height: "60px",
    display: "flex",
    position: "absolute",
    bottom: "0px",
    flexDirection: "row",
    alignItems: "center",
  },
  typeComment: {
    bottom: "0px",
    borderRadius: "20px",
    width: "80%",
    marginLeft: "15px",
    marginRight: "20px",
  },
  sendIcon: {
    width: "25px",
  },
}));

export default function CommentsExpanded(props) {
  const classes = useStyle();
  const [newComment, setNewComment] = useState("");
  const [activatedIcon, setActivatedIcon] = useState(false);
  const [comments, setComments] = useState(props.comments);

  const changeHandler = (e) => {
    setNewComment(e.target.value);
  };

  const inputHandler = (e) => {
    if (e.target.value == "") {
      setActivatedIcon(false);
    } else {
      setActivatedIcon(true);
    }
  };

  const sendHandler = (e) => {
    //todo
    let copyComments = props.commments;
    copyComments[props.comments.length] = { text: newComment, likes: 0 };
    setComments(copyComments);
    // todo check if the comments would be displayed on top
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Container className={classes.topBar}>
          <img
            className={classes.backIcon}
            src={BackIcon}
            alt='Back'
            onClick={props.setCommentOpen}
          />
          <p>Comments</p>
        </Container>
        <ScrollContainer className={classes.commentScroll}>
          {Object.values(comments).map((body) => {
            return <Comment comment={body} />;
          })}
        </ScrollContainer>
        <div className={classes.commentBar}>
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
    </Container>
  );
}
