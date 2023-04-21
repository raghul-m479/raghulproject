import React, { useState, useEffect ,useRef} from 'react';
import axios from 'axios';
import './Style.css';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#fff');
  const textColor= useRef();
  const fetchQuote = () => {
    axios.get('https://api.quotable.io/random')
      .then(res => {
        setQuote(res.data.content);
        setAuthor(res.data.author);
        setBackgroundColor(getRandomColor());
      }
      )
      
      .catch(err => console.log(err));
  }
  const colours = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
      '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
      '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
      '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
      '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
      '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
      '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
      '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
      '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
      '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
    ];
  useEffect(()=>{
  textColor.current.style.color=colours[Math.floor(Math.random() * colours.length)]
  },[quote,author]);

  const getRandomColor = () => {
    const colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
      '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
      '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
      '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
      '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
      '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
      '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
      '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
      '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
      '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  useEffect(() => {
    fetchQuote(); 
  }, []);

  return (
   
    <div style={{  backgroundColor ,marginLeft:250,marginRight:250,padding:15  }}>
      <div id="quote-box">
        <p id="text" ref={textColor}>{quote}</p>
        <p id="author" ref={textColor}>- {author}</p>
        <a href='https://twitter.com/'>
        <img id='twitter' src='https://deadline.com/wp-content/uploads/2016/09/twitter-logo1-e1602443184297.jpg?w=800'></img></a>
        <a href='https://www.tumblr.com/login'>
        <img id='tumblr' src='https://1.bp.blogspot.com/-hkoKHPzx4eg/Ucx-lXUTbUI/AAAAAAAALu8/QrPPiZle1T8/s1000/tumblr+logo.jpg'></img></a>
        
        <button id="new-quote" onClick={fetchQuote}>New Quote</button>
      </div>
    </div>
   
  );
}

export default QuoteGenerator;