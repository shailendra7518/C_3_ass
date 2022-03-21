import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from 'styled-components'
import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  // get all books when user lands on the page
  // populate them as mentioned below

  const Main = styled.div`
    /* Apply some responsive styling to children */
  `;

const [bookdata,setbookdata]=useState([])



   useEffect(()=>{
    axios.get('http://localhost:8080/Books')
    .then(function (response) {
      // handle success
     
      let data=response.data

      setbookdata([...data])
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    
   },[])

console.log("outer",bookdata)

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      />

      <Main className="mainContainer">
       {bookdata.map((book)=>{
       
       return <div>
         <img src={book.imageUrl} alt="" />
         <h3>{book.title}</h3>
         <h4>{book.price}</h4>

       </div>

       })}
      </Main>
    </div>
  );
};
