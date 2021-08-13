import React from 'react';

const DisplayShoppingCart = (props) => {
    return (
        <React.Fragment>
            <h1>This is the displayShoppingCart table - it is broken</h1>
            <table>
                <thead>
                    <tr></tr>
                    <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Reviews</th>
                    <th>Raiting</th>
                    </tr>
                    <tr></tr>
                </thead>
                <tbody>
                    {
                        props.shoppingCart.map((item) => {
                            return(
                                <tr>
                                    <td>{item.userId}</td>
                                    <td>{item.category}</td>
                                    <td>{item.description}</td>
                                    <td>{item.price}</td>
                                    <td>not done</td>
                                    <td>not done</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </React.Fragment>
    );
}
 
export default DisplayShoppingCart;