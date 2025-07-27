import React, { useReducer, useState } from "react";
import reducer from "./BookReducer";

const bookData = [
  { id: 1, name: "Obokkhoikal" },
  { id: 2, name: "Cintaoporadh" },
  { id: 3, name: "Ar Rahikul Makhtum" },
  { id: 4, name: "Foyjul Kalam" },
];

const Modal = ({ modalText }) => {
  return (
    <div>
      <h3>{modalText}</h3>
    </div>
  );
};



const Booklist = () => {
  const [bookName, setBookName] = useState("");
  const [bookState, dispatch] = useReducer(reducer, {
    books: bookData,
    isModalOpen: false,
    modalText: "",
  });

  //   const [books, setBooks] = useState(bookData);
  //   const [modalText, setModalText] = useState("");
  //   const [isModalOpen, setIsModalOpen] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    const newBook = { id: new Date().getTime().toString(), name: bookName };
    dispatch({ type: "add", payload: newBook });

    // setBooks((prevBook) => [...prevBook, newBook]);
    // setBookName("");
    // setIsModalOpen(true);
    // setModalText("Book is added");
  };

  const removeHandler = (id) => {
    dispatch({ type: "remove", payload: id });
  };

  return (
    <div>
      <h1>All Books</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="write book name"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>
      {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}
      <ul>
        {bookState.books.map((book) => (
          <li key={book.id}>
            {book.name}{" "}
            <button onClick={() => removeHandler(book.id)}>remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Booklist;
