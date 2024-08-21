import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import Newsitem from './Newsitem'
import Glnavbar from './Glnavbar';
import { auth, onAuthStateChanged } from '../firebase'
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
const SearchPage = () => {
  const gradientStyle = {
    backgroundColor:'#fef3ff',
  };
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
 

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/everything', {
        params: {
          q: query,
          apiKey: 'a02395dcf30041fdaf2241e17a70c1bd' // Replace 'YOUR_API_KEY' with your actual API key
        }
      });
      setTotalResults(response.data.totalResults);
      setArticles(response.data.articles);
      setQuery('');
    } catch (error) {
      console.error('Error fetching news articles:', error);
    }
  };
  

  return (
    <div style={gradientStyle}>
      <Glnavbar/>
      <div>
          

      </div>
      <div style={{marginLeft:'',marginTop:'1%'}}>
      
      <div class="input-group" style={{width:'510px',marginLeft:'33%',backgroundColor:'white',height:'50px',marginTop:'5%',borderRadius:'20px'}}>
  <div class="form-outline" data-mdb-input-init>
    <input type="search" id="form1" class="form-control"  value={query}
        onChange={(e) => setQuery(e.target.value)} />
    <label class="form-label" for="form1">Search</label>
  </div>
  <button type="button" class="btn btn-primary" data-mdb-ripple-init  onClick={handleSearch} style={{backgroundColor:'#8236FC',borderRadius:'20px'}}>
    <i class="fas fa-search" ></i>
  </button>
</div>
  <p style={{marginLeft:'42%',fontSize:'15px'}}> <strong>About Results Found: {totalResults}</strong></p>
      {/* <input style={{height:'60px',width:'350px',fontSize:'25px',borderRadius:'20px',backgroundColor:'wheat',}}
        type="text"
        placeholder="Enter keywords to search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      /> */}


      {/* </div>
      <button style={{marginLeft:'33%',marginTop:'5%',borderRadius:'20px'}}  onClick={handleSearch}>Search</button>
      <div> */}
      
      

      <div className="container my-3">
        <div className="row">
          { articles.map((element) => {
            return <div className="col-md-4">
               <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url}
                  author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
          })}
        </div>
      </div>

    </div>
    </div>
  );
};

export default SearchPage;
