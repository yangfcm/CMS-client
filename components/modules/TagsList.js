import Link from "next/link";
const renderTagsList = tags => {
  if (!tags || tags.length === 0) {
    return <div className="alert alert-warning text-center">No tags</div>;
  }
  return tags.map(tag => {
    return (
      <Link
        href={`/posts/?tag=${tag._id}`}
        as={`/posts/tag/${tag._id}`}
        key={tag._id}
      >
        <a className="btn btn-outline-primary mx-2 my-1">{tag.name}</a>
      </Link>
    );
  });
};

const TagsList = props => {
  const { tags } = props;
  return (
    <React.Fragment>
      <h4 className="text-center mb-3">Tags</h4>
      {renderTagsList(tags)}
    </React.Fragment>
  );
};

export default TagsList;
