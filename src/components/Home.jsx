import React, {Component} from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux"
// import Logo from "../logo.png"
import "../index.css"

class Home extends Component {
  render() {
    const { posts } = this.props;
    const postList = (posts.length) ? (
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

const mapStateToProps = (state) => {
    return {
      ...state
    }
}

export default connect(mapStateToProps)(Home);