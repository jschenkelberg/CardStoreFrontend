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
                    <th>Price</th>
                    
                    </tr>
                    <tr></tr>
                </thead>
                <tbody>
                    {
                        props.shoppingCart.map((item) => {
                            return(
                                <tr key={item.merchId}>
                                    <td>{item.userId}</td>                            
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