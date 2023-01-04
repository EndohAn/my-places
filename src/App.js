import {useState} from "react";
import './App.css';
import {data} from "./data";


function App() {

  const [place,setPlace]=useState(data);
  const removeItem =(id) =>{
    let newItem = place.filter(placeName => placeName.id !==id);
    setPlace(newItem)
  }
  // const[picture,setPicture]=useState(0);
  // const {nameImg,image}=image[picture];
  // const previousPicture=()=>{
  //   setPicture((picture=>{
  //     picture--;
  //     if(picture<0){
  //       return image.length-1;
  //     }
  //     return picture;
  //   }))
  // }
  // const nextPicture=()=>{
  //   setPicture((picture =>{
  //     picture++;
  //     if(picture>image.length-1){
  //       picture=0;
  //     }
  //     return picture;
  //   }))
  
  return ( 

    <div>
      <div className="container">
     <h1>I whant to visit {place.length}  places</h1>
     </div>
     {place.map((item =>{
      const {id,placeName,description,image}=item;

        return(
          <div key={id}>
            <div className="container">
            <h2>{id}-{placeName}</h2>
            </div>

            <div className="container">
              <div className="double_container">
            <p>{description}</p>
            </div>
            </div>

            <div className="container">
            <img src={image} width="300px" alt="places"/>
            </div>

            <div className="container">
              <button onClick ={()=> removeItem(id)} > REMOVE </button>
            </div>
          </div>
        )            
      }))}

      <div className="container">
        <button onClick={ () => setPlace([]) }> DELETE ALL </button>
      </div>
    </div>
    /* <div>
      <div className="container">
        <img src={image} width="300px" alt="photo"/>
      </div>
      <div className="container">
        <h2> {nameImg}</h2>
      </div>
      <div className="btn container">
        <button onClick={previousPicture}>Previous</button>
        <button onClick={nextPicture}>Next</button>
      </div>
    </div> */



)}

export default App;
