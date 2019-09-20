import Link from "next/link";
import Header from "../Header";
import TopNav from "../layout/TopNav";
import Main from "../layout/Main";
import Footer from "../layout/Footer";
import { webTitle, footerText } from "../../settings";

const Error = props => {
  const { message } = props;
  return (
    <div>
      <Header title={webTitle} />
      <TopNav title={webTitle} />
      <div
        className="d-flex flex-column pt-5 mt-5"
        style={{ height: 93 + "vh" }}
      >
        <div className="container flex-grow-1" style={{ maxWidth: 400 + "px" }}>
          <Main className="mt-4">
            <div className="mt-5 alert alert-danger text-center">
              <i className="fas fa-exclamation-circle"></i>&nbsp;&nbsp;
              {message}
            </div>
            <br />
            <div className="text-center">
              <Link href="/">
                <a className="btn btn-outline-danger">Back to Homepage</a>
              </Link>
            </div>
          </Main>
        </div>
        <Footer>{footerText}</Footer>
      </div>
    </div>
  );
};

export default Error;
