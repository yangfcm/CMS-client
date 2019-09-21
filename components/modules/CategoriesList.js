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
        <a>
          <div className="card bg-light mb-2">
            <div className="card-body py-3">
              <h5 className="card-title mb-0 text-center">{category.name}</h5>
            </div>
          </div>
        </a>
      </Link>
    );
  });
};

const CategoriesList = props => {
  const { categories } = props;
  return (
    <React.Fragment>
      <h4 className="text-center mb-3">Categories</h4>
      <div>{renderCategoriesList(categories)}</div>
    </React.Fragment>
  );
};

export default CategoriesList;
