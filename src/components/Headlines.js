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
import Slider from "react-slick";
import Card2 from './Card2';
import Default from './Landpage.jpeg'
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
export class Headlines extends Component {
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
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=a02395dcf30041fdaf2241e17a70c1bd&page=1&pageSize=15`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({ articles: parsedata.articles, totalResults: parsedata.totalResults, loading: false });
        console.log(parsedata.totalResults);
        console.log(this.state.articles);

    }
    
    render() {
        const { articles, loading } = this.state;
        var settings = {
            dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear"
          };
        return (
         <div style={{marginTop:'15px'}}>
                <Slider {...settings}>
        {!this.state.loading && articles.map((article) => (
          <Card2
            key={article.url}
            title={article.title}
            text={article.description}
            image={article.urlToImage?article.urlToImage:"https://tse4.mm.bing.net/th?id=OIP.-iB-_XtnqkEHjXXF6vNCJwHaE8&pid=Api&P=0&h=180"}
            link={article.url}
            buttonText="More info"
          />
        ))}
      </Slider>

         </div>
        )
    }
}

export default Headlines
