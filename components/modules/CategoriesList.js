const renderCategoriesList = categories => {
  if (!categories || categories.length === 0) {
    return <div className="alert alert-warning text-center">No categories</div>;
  }
  return categories.map(category => {
    return (
      <li className="list-group-item" key={category._id}>
        {category.name}
      </li>
    );
  });
};

const CategoriesList = props => {
  const { categories } = props;
  return (
    <React.Fragment>
      <h4 className="text-center">Categories</h4>
      <ul className="list-group">{renderCategoriesList(categories)}</ul>
    </React.Fragment>
  );
};

export default CategoriesList;
