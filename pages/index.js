import Header from "../components/Header";
import axios from "../settings/api";

class Home extends React.Component {
  static getInitialProps = async () => {
    const response = await axios.get("/api/posts");
    return {
      posts: response.data.data
    };
  };

  render() {
    const { posts } = this.props;
    return (
      <div>
        <Header title="Fan Yang's blog - 杨帆的博客" />
        <div>Welcome to Next.js!</div>
        {posts.length}
      </div>
    );
  }
}

export default Home;
