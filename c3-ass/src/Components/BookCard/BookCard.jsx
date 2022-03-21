import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect,useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export const BookCard = () => {
  // Bookcard is a card looking component, that is also a 'Link' for react-router
  //  it's basically shows one books information.
  // You can style custom tags with styled components in following way:
  // styled(Link)`
  //   color: xyz;
  // `
  //  now this container is a link that is also a card.
  //  card will have following 'children':
  //  div with className 'bookCard'
  //  Image of the book
  //  title of the book. h2 with classname 'title'
  //  price of book with class 'price'
  //
  // rough example:
  // <YourStyledLink to={}>
  //    title, image price etc here
  // </YourStyledLink>


  const {id}=useParams();

  const [bookdata,setbookdata]=useState([])


console.log(id)
  useEffect(()=>{
   axios.get(`http://localhost:8080/Books/?id=${id}`)
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
   
  },[id])

return <div>
  {bookdata.map((book)=>{
    return <div>
      <img src={book.imageUrl} alt="" />
      <h2>{book.title}</h2>
      <p>{book.description}</p>
      <p>{book.price}</p>
      <p>{book.section}</p>
      <p>{book.author}</p>
    </div>
  })}

</div>




};
