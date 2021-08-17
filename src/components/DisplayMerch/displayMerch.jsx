import React from 'react';
import MerchDetails from '../MerchDetails/merchDetailsModal';
import {useState} from 'react'

const DisplayMerch = (props) => {
    const [search, setSearch] = useState("");
  const filterItems = props.items.filter(items =>
    items.name.toLowerCase().includes(search.toLowerCase()) ||
    items.description.toLowerCase().includes(search.toLowerCase()) ||
    items.category.toLowerCase().includes(search.toLowerCase())
  );
    return (
        <React.Fragment>
            <h1>Cards for Sale</h1>
            <input
                placeholder="search..."
                onChange={(event) => setSearch(event.target.value)}
              ></input>
            <table className="table table-striped">
                <thead>
                    <tr></tr>
                    <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Price</th>
                    </tr>
                    <tr></tr>
                </thead>
                <tbody>
                    {
                        filterItems.map((item) => {
                            return(
                                //may need to rename key, temp name 
                                <tr key={item.merchId}>
                                    <td>{item.name}</td>
                                    <td>{item.category}</td>
                                    <td>{item.description}</td>
                                    <td>${item.price}</td>
                                    <td>
                                        <button onClick={() => props.addToCart(item)}>Add to Cart</button>
                                    </td>
                                    <td>
                                    <MerchDetails item={item} />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </React.Fragment>
    );
}
 
export default DisplayMerch;