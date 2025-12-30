'use client';

import {useState} from "react";
import {data} from "@/app/components/product/data";

function SearchBar(){
    let [filter, setFilter] = useState("");
    let [instockOnly, setInstockOnly] = useState(false);

    const changeFilter = (e) => {
        setFilter(e.target.value);
    }
    const changeInstockOnly = (e) => {
        setInstockOnly(e.target.checked);
    }
    return (
        <div>
            <form>
                <input type={"text"} onChange={changeFilter} value={filter} placeholder="Filter" />
                <div>
                    <input type={"checkbox"} value={instockOnly} onChange={changeInstockOnly}/>
                    Only show products in stock
                </div>
            </form>
        </div>
    )
}

function ProductTable(products){
    return(
        <div>
            <h1>Name           Price</h1>
        </div>
    )
}

export default  function FilterableProductTable(props) {
    const [products, setProducts] = useState(data);
    return(
        <div>
            <SearchBar/>
            <ProductTable products={products}/>
            Filterable
        </div>
    )
}