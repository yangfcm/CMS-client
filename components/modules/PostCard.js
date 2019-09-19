import moment from "moment";
import Link from "next/link";
import { withRouter } from "next/router";

// const renderTags = tags => {
//   return tags.map(tag => {
//     return (
//       <span className="badge badge-danger mr-3" key={tag.id}>
//         {tag.name}
//       </span>
//     );
//   });
// };

const PostCard = props => {
  const { post } = props;
  const placeholderImagSrc = "../../static/post-default.jpg";
  const placeholderAvatarSrc = "../../static/avatar-default.png";
  return (
    <div className="container border-bottom mb-4 pb-4">
      <div className="row">
        <div className="col-lg-8 col-md-7 col-12 d-flex flex-column justify-content-around">
          <Link href={`/post/?id=${post._id}`} as={`/post/${post._id}`}>
            <a>
              <h2>
                {post.title}
                <small>
                  {" "}
                  {post.isTop && (
                    <span className="badge badge-danger">TOP</span>
                  )}{" "}
                </small>
              </h2>
            </a>
          </Link>
          {/* <div className="mb-1">
            <i className="fas fa-folder-open"></i>
            &nbsp;&nbsp;
            {post.category.name}
          </div>
          <div className="mb-3">
            <i class="fas fa-tags"></i> &nbsp;
            {renderTags(post.tags)}
          </div> */}
          <div className="pb-1">
            <img
              src={post.author.avatar || placeholderAvatarSrc}
              alt={post.author.username}
              style={{
                width: 30 + "px",
                height: 30 + "px",
                borderRadius: 50 + "%"
              }}
            />
            <span className="text-primary font-weight-bold">
              &nbsp;&nbsp;{post.author.username}&nbsp;
            </span>
            wrote {moment(post.updatedAt * 1000).fromNow()}
          </div>
        </div>
        <div className="col-lg-4 col-md-5 col-12 d-flex justify-content-center text-center">
          <Link href={`/post/?id=${post._id}`} as={`/post/${post._id}`}>
            <a>
              <img
                src={post.featuredImage || placeholderImagSrc}
                alt={post.title}
                style={{ maxWidth: 80 + "%", height: "auto" }}
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(PostCard);
