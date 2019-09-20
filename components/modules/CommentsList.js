import CommentCard from './CommentCard';

const title = (
  <h4>
    <i className="far fa-comment-dots"></i>&nbsp;Comments
  </h4>
);

const CommentsList = props => {
  const { comments, isLoading } = props;
  if (isLoading) {
    return (
      <div>
        {title}
        <div className="text-center text-muted">
          <div className="spinner-border text-center" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div>Loading comments...</div>
        </div>
      </div>
    );
  }
  return (
    <div>
      {title}
      {!isLoading && comments && comments.length === 0 && (
        <h5 className="text-center text-muted">No comments</h5>
      )}
      {comments &&
        comments.length > 0 &&
        comments.map(comment => {
          return <CommentCard key={comment._id} comment={comment} />;
        })}
    </div>
  );
};

export default CommentsList;
