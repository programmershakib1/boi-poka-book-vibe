import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, image, bookName, author, tags, category , rating, totalPages} = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-96 border p-5 rounded-xl">
        <figure className="bg-blue-200 py-10 rounded-xl">
          <img src={image} className="h-[166px]" alt={bookName} />
        </figure>
        <div className="card-body space-y-5">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            {tags.map((tag, idx) => (
              <button
                key={idx}
                className="btn text-green-500 bg-green-100 rounded-full py-2 px-4"
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By: {author}</p>
          <div className="border border-dashed"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div>{rating}</div>
            <div>{totalPages}</div>
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-200"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
