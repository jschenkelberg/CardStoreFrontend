import { useState } from 'react';

const useForm =(callback)=> {
const [values, setValues]=useState({});
const handleChange =(event)=> {
    event.persist();
    setValues({...values,[event.target.name]: event.target.name === 'price' | 'rating' ? parseFloat(event.target.value) : event.target.value});

}
const handleSubmit =(event)=> {
    event.preventDefault();
    callback();
};
return {values,handleChange,handleSubmit}
};

export default useForm;


