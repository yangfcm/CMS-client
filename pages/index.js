import Header from "../components/Header";
import TopNav from "../components/layout/TopNav";
import Main from "../components/layout/Main";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";
import PostCard from "../components/modules/PostCard";
import axios from "../settings/api";
import "../styles/index.scss";

class Home extends React.Component {
  static getInitialProps = async () => {
    const postsRes = await axios.get("/api/posts");
    const categoriesRes = await axios.get("/api/categories");
    const tagsRes = await axios.get("/api/tags");
    return {
      posts: postsRes.data.data,
      categories: categoriesRes.data.data,
      tags: tagsRes.data.data
    };
  };

  renderPostsList = posts => {
    if (posts.length === 0) {
      return (
        <div className="alert alert-warning text-center">No posts found!</div>
      );
    }
    return posts.map(post => {
      return <PostCard key={post.id} post={post}></PostCard>;
    });
  };

  render() {
    const { posts } = this.props;
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
                <Main>{this.renderPostsList(posts)}</Main>
              </div>
              <div className="col-lg-3 col-md-4">
                <Sidebar>Sidebar</Sidebar>
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

export default Home;
