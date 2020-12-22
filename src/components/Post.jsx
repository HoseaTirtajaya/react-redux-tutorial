import React, {Component} from "react";
import axios from "axios";

class Post extends Component{
    state = {
        post: null
    }

    componentDidMount() {
        let id = this.props.match.params.post_id;
        let url = `https://jsonplaceholder.typicode.com/posts/${id}`


        axios.get(url)
        .then(dt_post => {
            this.setState({
                post: dt_post.data
            });
        }).catch(err => {
            if (err) throw err
        });
    }

    render() {
        const PostData = this.state.post ? (
            <div className="post" key={this.state.post.id}>
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ) : (
            <div className="center">Loading Data...</div>
        );
        return (
            <div className="container">
                {PostData}
            </div>
        )

    }
}

export default Post