import moment from "moment";
import Alert from "../utilities/Alert";
import { hideEmail } from "../../utils/utils";

const CommentCard = props => {
  const { comment } = props;
  const placeholderAvatarSrc = "../../static/avatar-default.png";
  return (
    <React.Fragment>
      <div
        className={
          comment.isNew ? "card mb-3 border-danger" : "card mb-3 bg-light"
        }
      >
        <div className="card-header d-md-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <img
              src={comment.author.avatar || placeholderAvatarSrc}
              alt={comment.author.firstName}
              style={{ height: "35px", borderRadius: "50%" }}
              className="mr-2"
            />
            <div>
              <div>
                {comment.author.firstName} {comment.author.lastName}{" "}
              </div>
              <div>{hideEmail(comment.author.email)}</div>
            </div>
          </div>
          <div>
            {moment(comment.createdAt * 1000).format("D MMM YYYY hh:mmA")}
          </div>
        </div>
        <div className="card-body">{comment.content}</div>
      </div>
      {comment.isNew && <Alert message="Thank you for your comment" />}
    </React.Fragment>
  );
};

export default CommentCard;
