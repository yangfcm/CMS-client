const CommentCard = props => {
  const { comment } = props;
  return <div>{comment.content}</div>;
};

export default CommentCard;
