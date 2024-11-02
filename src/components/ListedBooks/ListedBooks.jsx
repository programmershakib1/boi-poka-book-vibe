import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utility/addToDb";
import Book from "../Book/Book";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState('');
  const allBooks = useLoaderData();

  // ideally we will directly get the read book list from the database

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    // worst way
    // console.log(storedReadList, storedReadListInt, allBooks);

    //
    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );

    setReadList(readBookList);
  }, []);

  const handleSort = sortType => {
    setSort(sortType);

    // 
    if(sortType === 'No of pages'){
      const sortedReadList = [...readList].sort((a, b) => b.totalPages - a.totalPages);
      setReadList(sortedReadList);
    }

    if(sortType === 'Ratings'){
      const sortedReadList = [...readList].sort((a, b) => b.rating - a.rating);
      setReadList(sortedReadList);
    }
  }

  return (
    <div>
      <h3 className="text-3xl py-5">ListedBooks</h3>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          {sort ? `Sort by ${sort}` : 'Sort by'}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li onClick={() => handleSort('Ratings')}>
            <a>Rating</a>
          </li>
          <li onClick={() => handleSort('No of pages')}>
            <a>No of pages</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl">Books I Read: {readList.length}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {readList.map((book, idx) => (
              <Book key={idx} book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
