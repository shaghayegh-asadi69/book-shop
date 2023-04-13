import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function BookList() {
  return (
     <section className='booklist '>
     <Book/>
     <Book/>
     <Book/>
     <Book/>
  </section>
  );
}

const Book = () => {
  return(
     <article className='book'>
      <Image></Image>
      <Title></Title>
      <Author></Author>
   </article>);
};

const Image = () => <img src='https://images-na.ssl-images-amazon.com/images/I/81GuYRxyGEL._AC_UL127_SR127,127_.jpg' />

const Title = () => <h1>valentine's day</h1>

const Author = () => <h4>shaylee evan</h4>


ReactDOM.render(<BookList />,document.getElementById('root'));