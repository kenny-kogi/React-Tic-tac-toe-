import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";

const boook = [
  {

   img:
    'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
   title: 'I Love You to the Moon and Back',
   author: 'Amelia Hepworth',
  },
  {

   img:
    'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg',
   title: 'Our Class is a Family',
   author: 'Shannon Olsen',
  },
  {

   img:
    'https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg',
   title: 'The Vanishing Half: A Novel',
   author: 'Brit Bennett',
  },
 ];

function Booklist () {
  return  (
    <section className = "Booklist">
      {boook.map((booke) => {
        return <Book book = {booke} />
      })}
    
    
    
    </section>

  );
}



const Book = (props) => {
  const {img, title, author } = props.book;

  const handleClicke = () => {
   return alert("clicked");
  }
  return (
    <article className = "book">
      <img src = {img} alt = "" />
      <h1>{title}</h1>
      <h1>{author}</h1>
      <button type = "button" onClick = {handleClicke}>Click Me</button>

    </article>
  );

}

ReactDom.render(<Booklist />, document.getElementById("root"));