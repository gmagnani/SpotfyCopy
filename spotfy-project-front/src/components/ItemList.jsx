/* eslint-disable react/prop-types */
import "react";
import SingleItem from "./SingleItem";
import { Link } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idPath}) => {
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title}</h2>
        <Link className="item-list__link" to={path}>
          Mostrar tudo
        </Link>
      </div>
      <div className="item-list__container">
        {itemsArray
          .filter((_, index) => index < items)
          .map((currentValue, index) => (
            <SingleItem key={`${title}-${index}`} {...currentValue} idPath={idPath}/>
          ))}
      </div>
    </div>
  );
};

export default ItemList;
