import React, { useState } from "react";
import "./Pagination.css";

const Pagination = ({
  totalItemsAmount,
  setSize,
  currentPage,
  onPageChanged,
}) => {
  const setAmount = Math.ceil(totalItemsAmount / setSize);
  const [setNumber, setSetNumber] = useState(1);
  const firstSetNumber = (setNumber - 1) * setSize + 1;
  const lastSetNumber = setNumber * setSize;
  const items = [];
  for (let i = 1; i <= setAmount; i++) {
    items.push(i);
  }
  return (
    <div className="pagesNumbers">
      {setNumber > 1 && (
        <button
          onClick={() => setSetNumber(setNumber - 1)}
          className="fas fa-arrow-left btnArrow"
        ></button>
      )}
      {items
        .filter((item) => item >= firstSetNumber && item <= lastSetNumber)
        .map((item) => {
          return (
            <span
              className={` pagesNumber ${
                currentPage === item && "selectedPage"
              }`}
              key={item}
              onClick={() => {
                onPageChanged(item);
              }}
            >
              {item}
            </span>
          );
        })}
      {setAmount > setNumber && (
        <button
          onClick={() => setSetNumber(setNumber + 1)}
          className="fas fa-arrow-right btnArrow"
        ></button>
      )}
    </div>
  );
};

export default Pagination;
