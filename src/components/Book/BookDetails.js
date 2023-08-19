// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { reset } from "../../features/book/bookSlice";

// const BookDetails = () => {
//   const book = useSelector((state) => state.book);
//   const { title, author, image, price } = book;
//   const { id } = useParams();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     return () => {
//       dispatch(reset());
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [id]);
//   return (
//     <div className="book" key={book._id}>
//       <div className="book-link">
//         <div className="card">
//           <div className="image">
//             <img src={image} alt={title} />
//           </div>
//           <div className="content">
//             <div className="title">{title}</div>by <span>{author}</span>
//             <div className="price">#{price}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookDetails;
