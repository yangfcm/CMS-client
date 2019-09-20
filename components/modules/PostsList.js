import PostCard from "./PostCard";
const renderPostsList = posts => {
  if (!posts || posts.length === 0) {
    return (
      <div className="alert alert-warning text-center">No posts found!</div>
    );
  }
  return posts.map(post => {
    return <PostCard key={post._id} post={post}></PostCard>;
  });
};

const PostsList = props => {
  const { posts } = props;
  return <React.Fragment>{renderPostsList(posts)}</React.Fragment>;
};

export default PostsList;
