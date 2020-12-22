import React, {Component} from "react";
import axios from "axios";

class Home extends Component {
  state = {
    posts: [ ],
    user: [ ]
  }
  async componentDidMount() {
    let data = await axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts"
    });
    let userdata = await axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users"
    });

    console.log(userdata);
    console.log(data.data.slice(0, 50))
    this.setState({
      posts: data.data.slice(0, 50),
      user: userdata.data
    });
  }
  render() {
    const { posts, user } = this.state;
    const postList = (posts.length && user.length) ? (
      posts.map(item => {
          return (
            <div className="post card" key={item.id}>
              <div className="card-content">
                <span className="card-title">{item.title}</span>
                <p>{item.body}</p>
              </div>
            </div>
          )
        })
    ) : (
      <div className="center">No Posts Yet</div>
    )
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}

export default Home;