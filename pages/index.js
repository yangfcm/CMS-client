import { connect } from "react-redux";
import Header from "../components/Header";
import TopNav from "../components/layout/TopNav";
import Main from "../components/layout/Main";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";
import PostCard from "../components/modules/PostCard";
import Pagination from "../components/modules/Pagination";
import CategoriesList from "../components/modules/CategoriesList";
import TagsList from "../components/modules/TagsList";
import axios from "../settings/api";
import "../styles/index.scss";
import { readPosts } from "../actions/post";

class Home extends React.Component {
  state = {
    posts: null
  };
  static getInitialProps = async () => {
    const postsRes = await axios.get("/api/posts?status=1");
    const categoriesRes = await axios.get("/api/categories");
    const tagsRes = await axios.get("/api/tags");
    return {
      posts: postsRes.data,
      categories: categoriesRes.data.data,
      tags: tagsRes.data.data
    };
  };

  componentDidMount() {
    // console.log(this.props);
    this.setState({
      posts: this.props.posts
    });
  }

  renderPostsList = posts => {
    if (posts.length === 0) {
      return (
        <div className="alert alert-warning text-center">No posts found!</div>
      );
    }
    return posts.map(post => {
      return <PostCard key={post._id} post={post}></PostCard>;
    });
  };

  handleFetchPostsInPage = async page => {
    await this.props.readPosts(page);
    this.setState({
      posts: this.props.postsInPage
    });
  };

  render() {
    console.log(this.state.posts);
    const posts = this.state.posts
      ? this.state.posts.data
      : this.props.posts.data;
    const pageInfo = this.state.posts
      ? this.state.posts.meta
      : this.props.posts.meta;
    const { categories, tags } = this.props;

    let title = "Fan Yang's blog - 杨帆的博客";
    return (
      <div>
        <Header title={title} />
        <TopNav title={title} />
        <div
          className="d-flex flex-column pt-5 mt-5"
          style={{ height: 93 + "vh" }}
        >
          <div className="container flex-grow-1">
            <div className="row mt-4">
              <div className="col-lg-9 col-md-8">
                <Main>
                  {this.renderPostsList(posts)}
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
            <p>CMS blog system developed by Fan Y.</p>
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
