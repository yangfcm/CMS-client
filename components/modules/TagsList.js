const renderTagsList = tags => {
  if (!tags || tags.length === 0) {
    return <div className="alert alert-warning text-center">No tags</div>;
  }
  return tags.map(tag => {
    return <div key={tag._id}>{tag.name}</div>;
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
