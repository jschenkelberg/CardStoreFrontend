import React, { useEffect } from 'react';
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from 'axios';
import useFormRating from '../UseForm/useFormRating';



const MerchDetails = (props) => {
    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);   
    const [loadData, setLoadData] = useState(true)
    const [reviewsById, setReviewsById] = useState([])
    const{values, handleChange, handleSubmit} = useFormRating(merchDetails);
    function merchDetails() {
        addReview(values);
        getReviewsById()
        console.log(values);
    } 
    
 

    const addReview = async () => {
      const jwt =localStorage.getItem("token");
      const review={merchId:props.item.merchId, userReview: values.userreview, rating: values.rating}
      const res = await axios.post(`https://localhost:44394/api/review`,
   review, {headers: { Authorization: "Bearer " + jwt },
  })
   .then(res => {
      console.log(res);
      // this.props.getMerch(merchId)
  })
  .catch(err => alert("You can only review the item once."))    
  };
  
  // useEffect(() => {
    const getReviewsById = async () => {
      var res = await axios(`https://localhost:44394/api/review/${props.item.merchId}`);
      var tempData=res.data;
      setLoadData(false)
      console.log(res);
      setReviewsById(res.data)
    };
  // });
  function callTwoThings(){
    handleShow();
    getReviewsById();
  }
  useEffect(() => {
    getReviewsById();
    // console.log(reviewsById);
  }, [loadData])

  
    
    return (
      <>
        <Button variant="primary" onClick={callTwoThings}>
        Product Details
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Product Details</Modal.Title>
            
          </Modal.Header>
          <Modal.Body> 
          <h4>Name: {props.item.name}</h4>
          <h4>Category: {props.item.category}</h4>
          <h4>Description: {props.item.description}</h4>
          <h4>Price: ${props.item.price}</h4> 
          <h4></h4>
          <table className="table table-striped">
            <thead>
              <th>User Review</th>
              <th>User Rating</th>
            </thead>
            <tbody>
            {reviewsById.map((review) => {
              return(
                <tr key={review.merchId}>
                  <td>{review.userreview}</td>
                  <td>{review.rating}</td>
                </tr>
                )
              })
          }
            </tbody>
          </table>
          
          

          {/* <h4>Name: {props.item.name}</h4>
          <h4>Category: {props.item.category}</h4>
          <h4>Description: {props.item.description}</h4>
          <h4>Price: ${props.item.price}</h4> 
          <h4></h4>
          
          {reviewsById.map((review) => {
                            return(                                
                                <tr key={review.merchId}>
                                    <td>{review.userreview}</td>
                                     
                                    <td>{review.rating}</td>                                 
                                </tr>
                            )
                        })
                    } */}

          <form className="form-inline" onSubmit={handleSubmit}>
        <h6>Add Review</h6>
        <br />
        <div className="form-group">

        <input
          type="text"
          name="userreview"
          placeholder="Review this item"
          onChange={handleChange}
          value={values.userreview}
        />
             
                <select className="custom-select custom-select-lg" value={values.rating} type="text" name="rating" onChange={handleChange}>
                    <option>Star Rating</option>
                    <option value="1">1-Unsatisfactory</option>
                    <option value="2">2-Poor</option>
                    <option value="3">3-Acceptable</option>
                    <option value="4">4-Above Average</option>
                    <option value="5">5-Excellent</option>
                </select>
            </div> 

        <button type="submit"> Submit </button>
      </form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>           
          </Modal.Footer>
        </Modal>
      </>
    );
  }



  export default MerchDetails;