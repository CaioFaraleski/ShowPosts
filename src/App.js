import './App.scss';
import { Component } from 'react';
import { Posts } from './components/Posts';
import { loadPosts } from './utils/load-posts';

class App extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos });
  }

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <Posts posts={posts} />
      </section>
    );
  }
}
export default App;