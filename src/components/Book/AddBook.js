import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createBook } from "../../features/book/bookService";
const AddBook = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    image: "",
    description: "",
    category: "",
    price: "",
  });

  const { title, author, image, description, category, price } = formData;

  const options = [
    "Gospel",
    "Motivational",
    "Science-fiction",
    "Horrow",
    "others",
  ];
  const onOptionChangeHandler = (event) => {
    console.log("User Selected Value - ", event.target.value);
  };

  const handleInputChange = (e) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const bookData = {
      title,
      author,
      image,
      description,
      category,
      price,
    };
    dispatch(createBook(bookData));

    setFormData({
      title: "",
      author: "",
      image: "",
      description: "",
      category: "",
      price: "",
    });
  };

  return (
    <main className="form-wrap">
      <section className="heading">
        <h1>Add Book</h1>
        <p>Please fill the form to create a book</p>
      </section>

      <section className="form form-group">
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="title">Book Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={title}
              placeholder="Enter Book Title"
              required
              onChange={handleInputChange}
            />

            <label htmlFor="author">Book Author</label>
            <input
              type="text"
              className="form-control"
              id="author"
              name="author"
              value={author}
              placeholder="Enter Book Author"
              required
              onChange={handleInputChange}
            />

            <label htmlFor="image_url">Book Cover</label>
            <input
              type="text"
              className="form-control"
              id="image"
              name="image"
              value={image}
              placeholder="Enter Book Image_url"
              required
              onChange={handleInputChange}
            />

            <label htmlFor="description">Book Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={description}
              placeholder="Enter Book Description"
              required
              onChange={handleInputChange}
            />

            <select onChange={onOptionChangeHandler}>
              <option>Please choose one option</option>
              {options.map((category, index) => {
                return (
                  <option key={index} value={category} name={category}>
                    {category}
                  </option>
                );
              })}
            </select>

            <label htmlFor="price">Book Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              value={price}
              placeholder="Enter Book Price"
              required
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn">
            Add Book
          </button>
        </form>
      </section>
    </main>
  );
};

export default AddBook;
