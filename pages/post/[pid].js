import { connect } from "react-redux";
import moment from "moment";
import Header from "../../components/Header";
import TopNav from "../../components/layout/TopNav";
import Main from "../../components/layout/Main";
import CommentForm from "../../components/modules/CommentForm";
import CommentsList from "../../components/modules/CommentsList";
import Footer from "../../components/layout/Footer";
import Error from "../../components/modules/Error";
import axios from "../../settings/api";
import { readComments, createComment } from "../../actions/comment";
import "../../styles/index.scss";
import { webTitle, footerText } from "../../settings";

class Post extends React.Component {
  state = {
    post: null,
    isLoadingComments: false,
    comments: null
  };

  static getInitialProps = async ({ query }) => {
    const postId = query.pid;
    try {
      const postRes = await axios.get(`/api/posts/${postId}?status=1`);
      // console.log(postRes.data);
      return {
        post: postRes.data.data
      };
    } catch (e) {
      return {
        error: e.response ? e.response.data.message : e.message
      };
    }
  };

  async componentDidMount() {
    if (!this.props.post) {
      return;
    }
    this.setState({
      post: this.props.post,
      isLoadingComments: true
    });
    await this.props.readComments(this.props.post._id);
    // console.log(this.props.comment);
    this.setState({
      comments: this.props.comment.data,
      isLoadingComments: false,
      isSubmittingComment: false
    });
  }

  /** Submit comment */
  handleCreatComment = async formValues => {
    this.setState({
      isSubmittingComment: true
    });
    const postId = this.props.post._id;
    console.log(formValues);
    console.log(postId);
    const { comment, email, firstName, lastName } = formValues;
    const formData = {
      content: comment,
      email,
      firstName,
      lastName,
      postId
    };
    await this.props.createComment(formData);
    if (this.props.comment.data && !this.props.comment.error) {
      const newComment = this.props.comment.data;
      newComment.isNew = true; // If isNew is set as true, use different styles to render it.
      this.setState(state => {
        return {
          comments: [...state.comments, newComment],
          isSubmittingComment: false
        };
      });
    }
  };

  render() {
    const placeholderAvatarSrc = "../../static/avatar-default.png";
    const { error, post } = this.props;
    if (this.props.error) {
      return <Error message={error} />;
    }
    const { comments, isLoadingComments, isSubmittingComment } = this.state;

    return (
      <div>
        <Header title={webTitle} />
        <TopNav title={webTitle} />
        <div
          className="d-flex flex-column pt-5 mt-5"
          style={{ height: 93 + "vh" }}
        >
          <div className="mt-4 container flex-grow-1">
            <Main>
              <h1 className="mb-4 text-center text-primary">{post.title}</h1>{" "}
              {/* Title */}
              <div className="pb-1 text-center">
                {" "}
                {/* Author and post info */}
                <img
                  src={post.author.avatar || placeholderAvatarSrc}
                  alt={post.author.username}
                  style={{
                    width: 60 + "px",
                    height: 60 + "px",
                    borderRadius: 50 + "%"
                  }}
                />
                <div className="text-primary font-weight-bold">
                  &nbsp;&nbsp;{post.author.username}&nbsp;
                </div>
                <div className="text-muted">
                  wrote {moment(post.updatedAt * 1000).fromNow()}
                </div>
              </div>
              <div className="d-flex justify-content-center row">
                {post.featuredImage && (
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    style={{ maxWidth: "300px", maxHeight: "250px" }}
                  />
                )}
              </div>
              <div style={{ maxWidth: 600 + "px", margin: "15px auto" }}>
                <div className="border-top mt-4"></div> {/*horizontal line*/}
                <div
                  className="p-2 pt-4"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                >
                  {/* Content */}
                </div>
                <h5 className="mb-3">
                  <i className="far fa-folder-open"></i>
                  &nbsp;&nbsp;
                  <span>Category</span>
                  &nbsp;&nbsp;
                  <span className="text-primary font-weight-bold">
                    {post.category.name}
                  </span>
                </h5>{" "}
                {/* Category */}
                {post.tags.length > 0 && (
                  <h5>
                    <i className="fas fa-tags"></i>&nbsp;&nbsp;Tags &nbsp;&nbsp;
                    {post.tags.map(tag => {
                      return (
                        <span
                          key={tag._id}
                          className="pl-1 pr-1 mx-1 badge badge-primary"
                        >
                          {tag.name}
                        </span>
                      );
                    })}
                  </h5>
                )}
                {/* Tags */}
                <div className="my-4 border-top"></div>
                <CommentsList
                  comments={comments}
                  isLoading={isLoadingComments}
                />
                <div className="my-4"></div>
                {/* Comments list*/}
                <CommentForm
                  postId={post._id}
                  formSubmit={this.handleCreatComment}
                  isSubmitting={isSubmittingComment}
                />{" "}
                {this.props.comment && this.props.comment.error && (
                  <div className="text-center text-danger mt-1">
                    Failed to submit comment
                  </div>
                )}
                {/* Comment form*/}
              </div>
            </Main>
          </div>
          <Footer>
            <p>{footerText}</p>
          </Footer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comment: state.comment
  };
};

export default connect(
  mapStateToProps,
  { createComment, readComments }
)(Post);
