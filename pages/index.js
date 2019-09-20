import { connect } from "react-redux";
import Header from "../components/Header";
import TopNav from "../components/layout/TopNav";
import Main from "../components/layout/Main";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";
import Pagination from "../components/modules/Pagination";
import PostsList from "../components/modules/PostsList";
import CategoriesList from "../components/modules/CategoriesList";
import TagsList from "../components/modules/TagsList";
import axios from "../settings/api";
import "../styles/index.scss";
import { readPosts } from "../actions/post";
import { webTitle, footerText } from "../settings";

class Home extends React.Component {
  state = {
    posts: null
  };
  static getInitialProps = async () => {
    try {
      const postsRes = await axios.get("/api/posts?status=1");
      const categoriesRes = await axios.get("/api/categories");
      const tagsRes = await axios.get("/api/tags");
      return {
        posts: postsRes.data,
        categories: categoriesRes.data.data,
        tags: tagsRes.data.data
      };
    } catch (e) {
      return {
        error: e.message
      };
    }
  };

  componentDidMount() {
    // console.log(this.props);
    if (!this.props.posts) {
      return;
    }
    this.setState({
      posts: this.props.posts
    });
  }

  handleFetchPostsInPage = async page => {
    await this.props.readPosts(page);
    this.setState({
      posts: this.props.postsInPage
    });
  };

  render() {
    if (this.props.error) {
      return <Error message={this.props.error} />;
    }
    console.log(this.state.posts);
    const posts = this.state.posts
      ? this.state.posts.data
      : this.props.posts.data;
    const pageInfo = this.state.posts
      ? this.state.posts.meta
      : this.props.posts.meta;
    const { categories, tags } = this.props;

    return (
      <div>
        <Header title={webTitle} />
        <TopNav title={webTitle} />
        <div
          className="d-flex flex-column pt-5 mt-5"
          style={{ height: 93 + "vh" }}
        >
          <div className="container flex-grow-1">
            <div className="row mt-4">
              <div className="col-lg-9 col-md-8">
                <Main>
                  <PostsList posts={posts} />
                  <Pagination
                    pageInfo={pageInfo}
                    fetchPostsInPage={this.handleFetchPostsInPage}
                  />
                </Main>
              </div>
              <div className="col-lg-3 col-md-4">
                <Sidebar>
                  <CategoriesList categories={categories} />
                  <br />
                  <br />
                  <TagsList tags={tags} />
                </Sidebar>
              </div>
            </div>
          </div>
          <Footer>
            <p>{footerText}</p>
          </Footer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    postsInPage: state.post
  };
};

export default connect(
  mapStateToProps,
  { readPosts }
)(Home);
