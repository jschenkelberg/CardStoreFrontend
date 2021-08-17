import React from 'react';
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import useFormPrice from '../UseForm/useFormPrice';
import axios from 'axios';



const MerchModal = (props) => {
    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);   
    const{values, handleChange, handleSubmit} = useFormPrice(merchForm);
    function merchForm() {
        addMerch(values);
        console.log(values);
    }
    
    const addMerch = async (values) => {
        const jwt = localStorage.getItem("token");
        const res = await axios
          .post(`https://localhost:44394/api/merches`, values,{
            headers: { Authorization: "Bearer " + jwt },
          })
          .then((res) => {
            console.log(res);
          
            // this.props.getMerch(merchId)
            
          })     
          .catch((err) => console.log(err));
      };
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add Cards to Sell
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Add Cards for Sale</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form className="form-inline" onSubmit={handleSubmit}>
          <h2>Add Cards for Sale</h2>
          <br />
          <div className="form-group">
            <select
              className="custom-select custom-select-lg"
              value={values.category}
              type="text"
              name= "category"
              onChange={handleChange}
            >
              <option value>Select a Category</option>
              <option value="Baseball">Baseball</option>
              <option value="Basketball">Basketball</option>
              <option value="Football">Football</option>
              <option value="Hockey">Hockey</option>
              <option value="Miscellaneous">Miscellaneous</option>
            </select>
          </div>

          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={values.name}
          />

          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={handleChange}
            value={values.description}
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleChange}
            value={(values.price)*1}  
                    />

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


  export default MerchModal;