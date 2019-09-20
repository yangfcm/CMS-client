import { connect } from "react-redux";
import moment from "moment";
import Header from "../../components/Header";
import TopNav from "../../components/layout/TopNav";
import Main from "../../components/layout/Main";
import CommentForm from "../../components/modules/CommentForm";
import Footer from "../../components/layout/Footer";
import Error from "../../components/modules/Error";
import axios from "../../settings/api";
import "../../styles/index.scss";
import { webTitle, footerText } from "../../settings";

class Post extends React.Component {
  state = {
    post: null
  };

  static getInitialProps = async ({ query }) => {
    const postId = query.pid;
    try {
      const postRes = await axios.get(`/api/posts/${postId}`);
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

  componentDidMount() {
    this.setState({
      post: this.props.post
    });
  }

  render() {
    const placeholderAvatarSrc = "../../static/avatar-default.png";
    const { error, post } = this.props;
    if (this.props.error) {
      return <Error message={error} />;
    }

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
                <div>wrote {moment(post.updatedAt * 1000).fromNow()}</div>
              </div>
              <div className="text-center">
                {post.featuredImage && (
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    style={{ maxHeight: 250 + "px" }}
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
                <div>
                  <i className="far fa-folder-open"></i>
                  &nbsp;&nbsp;
                  <span>Category</span>
                  &nbsp;&nbsp;
                  <span className="text-primary font-weight-bold">
                    {post.category.name}
                  </span>
                </div>{" "}
                {/* Category */}
                {post.tags.length > 0 && (
                  <div>
                    <i className="fas fa-tags"></i>&nbsp;&nbsp;Tags &nbsp;&nbsp;
                    {post.tags.map(tag => {
                      return (
                        <span
                          key={tag._id}
                          className="pl-1 pr-1 mx-1 badge badge-danger"
                        >
                          {tag.name}
                        </span>
                      );
                    })}
                  </div>
                )}
                {/* Tags */}
                <div className="my-4 border-top"></div>
                <CommentForm postId={post._id} /> {/* Comment form*/}
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

export default Post;
