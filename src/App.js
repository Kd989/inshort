import axios from "axios"
import React, { useEffect, useState } from 'react'
import './App.css';
import apikey from "./components/data/config";
import NavbarInshort from './components/NavbarInshort';
import NewsContent from './components/NewsContent/NewsContent';
// import categories from "./components/data/Categories";
import Footer from "./components/Footer";


function App() {

  const [category, setCategory] =useState("general");
  const [newsArray, setNewsArray] =useState([]);
  const [newsResults, setNewsResult] = useState();
  const [loadMore,setLoadmore] =useState(20);


  // ${proxyUrl}
  const newsApi = async()=>{
    try{
      // const proxyUrl = "https://cors-anywhere.herokuapp.com/"
      // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apikey}&category=${category}&pageSize=${loadMore}`)
     setNewsArray(news.data.articles);
     setNewsResult(news.data.totalResults)
    }catch(error){
      console.log(error);
    }
  }
  // console.log(newsArray)

  useEffect(()=>{
    newsApi(); 
    // eslint-disable-next-line
  },[newsResults,category,loadMore])
  return (
    <div className="App">
      <NavbarInshort setCategory={setCategory}/>
      <NewsContent setLoadmore ={setLoadmore} loadMore={loadMore} newsArray={newsArray} newsResults={newsResults}/>
      <Footer/>
    </div>
  );
}

export default App;
