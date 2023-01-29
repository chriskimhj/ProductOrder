import React, { Fragment } from "react";
import AvailableProducts from "./AvailableProducts";
import ProductsSummary from "./ProductsSummary";

const Products = () => {
    return(
        <Fragment>
            <ProductsSummary></ProductsSummary>
            <AvailableProducts></AvailableProducts>
        </Fragment>
    );
};

export default Products;