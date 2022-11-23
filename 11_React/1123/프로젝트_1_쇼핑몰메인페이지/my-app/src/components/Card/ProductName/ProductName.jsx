import React from "react";
import "./productName.css";

export default function ProductName({ productName }) {
    // console.log({ ProductName });
    return <strong className="product-name sl-ellipsis">{productName}</strong>;
}
