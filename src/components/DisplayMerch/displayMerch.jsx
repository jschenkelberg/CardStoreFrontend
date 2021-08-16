import React from 'react';
import MerchDetails from '../MerchDetails/merchDetailsModal';

const DisplayMerch = (props) => {
    return (
        <React.Fragment>
            <h1>This is the displayMerch table</h1>
            <table>
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
                        props.items.map((item) => {
                            return(
                                //may need to rename key, temp name 
                                <tr key={item.merchId}>
                                    <td>{item.name}</td>
                                    <td>{item.category}</td>
                                    <td>{item.description}</td>
                                    <td>{item.price}</td>
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