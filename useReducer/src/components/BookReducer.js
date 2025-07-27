const bookReducer = (state, action) => {
  if (action.type === "add") {
    const allBooks = [...state.books, action.payload];
    return {
      ...state,
      books: allBooks,
      isModalOpen: true,
      modalText: "books is added",
    };
  }

  if (action.type === "remove") {
    const filteredBooks = [...state.books].filter(
      (book) => book.id !== action.payload
    );
    return {
      ...state,
      books: filteredBooks,
      isModalOpen: true,
      modalText: "book is removed",
    };
  }
  return state;
};

export default bookReducer;