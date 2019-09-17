import Link from "next/link";
import { withRouter } from "next/router";

class TopNav extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
          <Link href="/">
            <a className="navbar-brand app--logo">
              <img className="img-fluid" src="/static/logo.png" alt="logo" />
              &nbsp;&nbsp;{title}
            </a>
          </Link>
        </nav>
        <style>{`
					.app--logo {
						display: block;
						margin: 0 auto;
					}
					.app--logo img { 
						max-height: 35px;
					}
				`}</style>
      </React.Fragment>
    );
  }
}

export default withRouter(TopNav);
