import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import Navbar from './Navbar';
import Science from './Science.jpg'
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import Glnavbar from './Glnavbar';
import Style from './rotate.css';
import { auth, onAuthStateChanged } from '../firebase'
import User from './User';
let user = auth.currentUser;
const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
     console.log(user.displayName);
      // You can access user information like user.displayName, user.email, etc.
    } else {
      // User is signed out
      unsubscribe();
    }
  });
const gradientStyle = {
  backgroundColor:'#FEF3FF'
};


export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 10,
    category: "general",
  }
  static propTypes = {
    country: PropTypes.array,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }


  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a02395dcf30041fdaf2241e17a70c1bd&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ articles: parsedata.articles, totalResults: parsedata.totalResults, loading: false });

  }

  handleprevious = async () => {
    console.log(this.state.page);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a02395dcf30041fdaf2241e17a70c1bd&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
      articles: parsedata.articles,
      page: this.state.page - 1,
      loading: false
    })
  }
  handlenext = async () => {
    console.log(this.state.page);
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a02395dcf30041fdaf2241e17a70c1bd&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedata = await data.json();
      console.log(parsedata);
      this.setState({
        articles: parsedata.articles,
        page: this.state.page + 1,
        loading: false
      })
    }
  }
  render() {
    return (
      <div style={gradientStyle}>

        <div className="container my-3">
          {this.state.loading && <Spinner />}
          <div className="row">
            { !this.state.loading && this.state.articles.map((element)  => {
              return <div className="col-md-4" key={element.url}>
                <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage?element.urlToImage:"./navi.jpeg"} newsUrl={element.url}
                  author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
          <div className="d-flex justify-content-between">
            <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handlenext}>For more &raquo;</button>
          </div>
        </div>

      </div>

    )
  }
}

export default News
