import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = () => {

  // you will receive section name from URL here.
  // Get books for only this section and show
  //   Everything else is same as Home page
const {name}=useParams();

  const [bookdata,setbookdata]=useState([])


console.log(name)
  useEffect(()=>{
   axios.get(`http://localhost:8080/Books/?section=${name}`)
   .then(function (response) {
     // handle success
    
     let data=response.data
console.log(data)
     setbookdata([...data])
   })
   .catch(function (error) {
     // handle error
     console.log(error);
   })
   
  },[name])






  const Main = styled.div`
    /* Same as Homepage */
  `;

  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        {
          //   Show section name here
        }
      </h2>
      <SortAndFilterButtons handleSort={"give sorting function to component"} />

      <Main className="sectionContainer" style={{display:"flex"}}>
      {bookdata.map((book)=>{
        return <div>
           <Link to={`/bookcard/${book.id}`}> <img src={book.imageUrl} alt="" /></Link>
            <h3>{book.title}</h3>
            <h4>{book.price}</h4>
            </div>
      })}
      </Main>
    </>
  );
};
