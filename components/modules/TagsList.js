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
        <a>
          <div className="badge badge-primary m-2 p-2" key={tag._id}>
            {tag.name}
          </div>
        </a>
      </Link>
    );
  });
};

const TagsList = props => {
  const { tags } = props;
  return (
    <React.Fragment>
      <h4 className="text-center">Tags</h4>
      {renderTagsList(tags)}
    </React.Fragment>
  );
};

export default TagsList;
