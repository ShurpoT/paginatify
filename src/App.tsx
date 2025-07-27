import { useEffect, useState } from "react";
import { Paginatify } from "./Components/paginatify/paginatify";

import "./App.css";

type Data = {
    albumId: number;
    id: number;
    title: number;
    url: number;
    thumbnailUrl: number;
};

const perPage = 4;

function App() {
    const [items, setItems] = useState<Data[]>([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        // JSONPlaceholder doesn't return the total number of items.
        // Therefore, we use the second FETCH to calculate the pagination length.
        // If you use filters, just include them in both requests.

        //Method for fetching data for the current page only.
        fetch(`https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&_limit=${perPage}`)
            .then((res) => res.json())
            .then((data) => setItems(data));

        // Method for fetching all data and calculating the pagination length.
        fetch(`https://jsonplaceholder.typicode.com/photos`)
            .then((res) => res.json())
            .then((data) => setPageCount(Math.ceil(data.length / perPage)))
            .finally(() => setIsLoading(false));
    }, [currentPage]);

    const handlePageClick = (i: number) => {
        setCurrentPage(i);
    };

    return (
        <>
            <Paginatify className="paginatify" pageCount={pageCount} step={3} onPageChange={handlePageClick} />

            {/* ==== YOUR CONTENT ==== */}
            {isLoading ? (
                <p className="text">Loading...</p>
            ) : (
                <ul className="list">
                    {items.map((item, i) => (
                        <li key={i} className="item">
                            {item.title}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default App;
