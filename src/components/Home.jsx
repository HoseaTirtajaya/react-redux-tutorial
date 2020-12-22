import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Logo from "../logo.png"
import "../index.css"

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
            <div className="post card black-text" key={item.id}>
              {/* <img src={Logo} alt="A Logo" /> */}
              <div className="card-content">
                <Link to={"/" + item.id}>
                <span className="card-title">{item.title}</span>
                </Link>
                <p>{item.body}</p>
              </div>
            </div>
          )
        })
    ) : (
      <div className="center">Loading data...</div>
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