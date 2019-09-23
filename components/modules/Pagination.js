import { pageSpan } from "../../settings";
const Pagination = props => {
  const { totalPages, currentPage, prevPage, nextPage } = props.pageInfo;
  const { fetchPostsInPage } = props;
  if (totalPages === 0) {
    return null;
  }
  const availPages = pageSpan * 2 + 1; // How many pages are displayed on pagination

  const renderPages = (totalPages, currentPage) => {
    const pagesArr = [];

    // 2
    const pageEnd =
      currentPage + pageSpan > totalPages
        ? totalPages
        : currentPage + pageSpan < availPages
        ? availPages < totalPages
          ? availPages
          : totalPages
        : currentPage + pageSpan;
    const pageStart =
      currentPage - pageSpan <= 1
        ? 1
        : totalPages - (currentPage - pageSpan) + 1 < availPages
        ? totalPages - availPages >= 0
          ? totalPages - availPages + 1
          : 1
        : currentPage - pageSpan;
    for (let i = pageStart; i <= pageEnd; i++) {
      // Create a pagination array
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
    <div className="d-flex justify-content-center">
      <ul className="pagination">
        {totalPages > availPages && (
          <React.Fragment>
            <li
              className={currentPage === 1 ? "page-item disabled" : "page-item"}
            >
              <a
                className="page-link"
                href="#"
                onClick={() => {
                  fetchPostsInPage(1);
                }}
              >
                &laquo;
              </a>
            </li>
            <li
              className={currentPage === 1 ? "page-item disabled" : "page-item"}
            >
              <a
                className="page-link"
                href="#"
                onClick={() => {
                  fetchPostsInPage(prevPage);
                }}
              >
                &lt;
              </a>
            </li>
          </React.Fragment>
        )}
        {renderPages(totalPages, currentPage)}
        {totalPages > availPages && (
          <React.Fragment>
            <li
              className={
                currentPage === totalPages ? "page-item disabled" : "page-item"
              }
            >
              <a
                className="page-link"
                href="#"
                onClick={() => {
                  fetchPostsInPage(nextPage);
                }}
              >
                &gt;
              </a>
            </li>
            <li
              className={
                currentPage === totalPages ? "page-item disabled" : "page-item"
              }
            >
              <a
                className="page-link"
                href="#"
                onClick={() => {
                  fetchPostsInPage(totalPages);
                }}
              >
                &raquo;
              </a>
            </li>
          </React.Fragment>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
