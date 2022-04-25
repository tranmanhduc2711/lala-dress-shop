import React,{useState,useEffect} from 'react'
import axios from 'axios'

import ImageList from './ImageList';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Homepage.scss";

export default function HomepageSlide() {
    const [urlList,setUrlList] = useState([]);

    const getUrl = (e) => {
      setUrlList([...e]);
    };
    const fetchImageData=() =>{
       axios
         .get(`http://localhost:8080/product/all`)
         .then((res) => {
           const url = res.data;
           getUrl(url);
         })
         .catch((error) => console.log(error));
    };

    useEffect(() => {
      fetchImageData();
    },[]); 
  return (
    <>
      <ImageList urlList={urlList}></ImageList>
    </>
  );
}
