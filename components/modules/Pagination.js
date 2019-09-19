const Pagination = props => {
  const { totalPages, currentPage } = props.pageInfo;
  const { fetchPostsInPage } = props;

  const renderPages = (totalPages, currentPage) => {
    const pagesArr = [];
    for (let i = 1; i <= totalPages; i++) {
      // Create a page array based on totalPages
      // e.g. totalPages = 5, pagesArr = [1, 2, 3, 4, 5]
      pagesArr.push(i);
    }
    return pagesArr.map(page => {
      return (
        <li
          className={page == currentPage ? "page-item active" : "page-item"}
          key={page}
        >
          <a
            className="page-link"
            href="#"
            onClick={() => {
              fetchPostsInPage(page);
            }}
          >
            {page}
          </a>
        </li>
      );
    });
  };

  return (
    <React.Fragment>
      <ul className="pagination">{renderPages(totalPages, currentPage)}</ul>
    </React.Fragment>
  );
};

export default Pagination;
