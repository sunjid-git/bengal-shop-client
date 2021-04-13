import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";

const AddEvents = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            weight: data.weight,
            price: data.price,
            imageURL: imageURL
        };
        const url = `https://obscure-mountain-99784.herokuapp.com/addEvent`;
        
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side response'))
    };

    const handleImageUpload = event => {

        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '78c1e19f8b876ccf018bfd4d8fb5be23');
        imageData.append('image',event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
    <div className="container">
        <h1 className=" text-success font-weight-bold text-center p-5">Upload your products here...</h1>

        <form onSubmit={handleSubmit(onSubmit)}>

        <label className="text-success font-weight-bold">Product Name</label>
        <input name="name" placeholder="Enter Name" {...register("name")} className="form-control"/>
        <br/>    

        <label className="text-success font-weight-bold">Product Weight</label>
        <input weight="weight" placeholder="Enter Number" {...register("weight")} className="form-control"/>
        <br/>

        <label className="text-success font-weight-bold">Add Price</label>
        <input price="price" placeholder="Enter price" {...register("price")} className="form-control"/>
        <br/>

        <label className="text-success font-weight-bold">Add Photo</label>
        <br/>
        <input name="exampleRequired" type="file" onChange={handleImageUpload}/>
        <br/>

        <br/>
        <input className="bg-danger rounded" type="submit"/>
        </form>
    </div>
    );
};

export default AddEvents;