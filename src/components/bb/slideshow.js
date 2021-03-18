import React from "react"
import { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getSrc } from "gatsby-plugin-image"
import { css } from "@emotion/react"

const slideshow_container = css`
    position: relative;
    margin: auto;
    
    * {box-sizing:border-box;}

    img{border-radius: 15px;}

    /* Hide the images by default */
    .mySlides {
      display: none;
    }

    /* Next & previous buttons */
    .prev, .next {
      outline:none;
      border: none;
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: auto;
      margin-top: -22px;
      padding: 16px;
      color: black;
      font-weight: bold;
      font-size: 18px;
      transition: 0.6s ease;
      border-radius: 0 10px 10px 0;
      user-select: none;
      text-shadow: initial;
      background-color: rgba(255,255,255,0.50);
    }

    /* Position the "next button" to the right */
    .next {
      right: 0;
      border-radius: 10px 0 0 10px;
    }

    /* On hover, add a black background color with a little bit see-through */
    .prev:hover, .next:hover, .prev:focus, .next:focus {
      background-color: rgba(255,255,255,1);
      color: var(--secondary);
    }

    /* Caption text */
    .text {
      color: #f2f2f2;
      /* font-size: 15px; */
      padding: 8px 12px;
      position: absolute;
      bottom: 8px;
      width: 100%;
      text-align: center;
    }

    /* Number text (1/3 etc) */
    .numbertext {
      color: #f2f2f2;
      /* font-size: 12px; */
      padding: 8px 12px;
      position: absolute;
      top: 0;
      z-index: 10;
    }

    /* Fading animation */
    .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
    }

    @-webkit-keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
    }

    @keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
    }
`;

export default function Slideshow(props) {
    const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
        }
      }
    }
    `)
  const imageList = data.allImageSharp.nodes.filter(e => getSrc(e.gatsbyImageData).includes(props.imagefilter));
  console.log(imageList)
  let currentSlide = 4;
  
  // SECTION slideshow controls...
  // const [dot, setDot] = useState(1);
  useEffect(()=>{
    let curr = currentSlide;
    let slides = document.getElementsByClassName("mySlides");
    if(curr < 1) {curr = slides.length}
    if(curr > slides.length) {curr = 1}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[curr-1].style.display = "block";
  });

  function move(dir){
    currentSlide += dir;
    let slides = document.getElementsByClassName("mySlides");
    if(currentSlide < 1) {currentSlide = slides.length}
    if(currentSlide > slides.length) {currentSlide = 1}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[currentSlide-1].style.display = "block";
  }
  //!SECTION end slideshow controls

  return (
    <div >
      <div css={slideshow_container}>
        {imageList.map( (image, index, arr) =>
            <div key={index} className="mySlides fade">
                <GatsbyImage image={image.gatsbyImageData} alt="test" />
                <div className="text">{index + 1} / {arr.length}</div>
            </div>
        )}
        {/* <!-- Next and previous buttons --> */}
        <button className="prev" onClick={()=>move(-1)}>&#10094;</button>
        <button className="next" onClick={()=>move(1)}>&#10095;</button>
      </div>
    </div>
  )
}
