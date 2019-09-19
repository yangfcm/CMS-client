import Link from "next/link";
const renderCategoriesList = categories => {
  if (!categories || categories.length === 0) {
    return <div className="alert alert-warning text-center">No categories</div>;
  }
  return categories.map(category => {
    return (
      <Link
        href={`/posts/?category=${category._id}`}
        as={`/posts/category/${category._id}`}
        key={category._id}
      >
        <a className="list-group-item list-group-item-action text-center">
          {category.name}
        </a>
      </Link>
    );
  });
};

const CategoriesList = props => {
  const { categories } = props;
  return (
    <React.Fragment>
      <h4 className="text-center">Categories</h4>
      <div className="list-group">{renderCategoriesList(categories)}</div>
    </React.Fragment>
  );
};

export default CategoriesList;
