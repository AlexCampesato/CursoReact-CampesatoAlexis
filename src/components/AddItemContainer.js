
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";
import React, { useState } from "react";
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';

const AddItemContainer = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const [image, setImage] = useState()


    const handleTitleChange = event => setTitle(event.target.value)
    const handleDescriptionChange = event => setDescription(event.target.value)
    const handleCategoryChange = event => setCategory(event.target.value)
    const handlePriceChange = event => setPrice(event.target.value)
    const handleStockChange = event => setStock(event.target.value)
    const handleImageChange = event => setImage(event.target.files[0])

    const onSubmit = async(event) => {
        event.preventDefault();
        console.log(title)
        
            if(![title,description,category].some(field=>field=="")){
                
                let pictureURL="https:via.placeholder.com/600?text=Sin+imagen"

                const itemCollection= collection(db, "producto")

                if(typeof image !=="undefined"){
                    const storage=getStorage();
                    const imageName =(+new Date()).toString(36);
                    const storageRef=ref(storage, `producto/${imageName}`);

                    const uploadTask = await uploadBytes(storageRef, image)
                    pictureURL=await getDownloadURL(uploadTask.ref)

                }

                const newItem={
                    title:title,
                    category:category,
                    description:description,
                    price:price,
                    stock:stock,
                    image: image
                }

                addDoc(itemCollection, newItem)
                .then(doc=>{
                    console.log("Se guardo el documento correctamente",  doc.id)
                })
                .catch(error=>{
                    console.log(error)
                })
            }else{
                console.log("Hay campos vacios")

            }

    }  

    return(
        <div className="'form-product">
            <h1>Agregar nuevo producto</h1>
            <form onSubmit={onSubmit}>
                <div className='input-item'>
                    <label>Nombre del producto</label>
                    <input value={title} onChange={handleTitleChange} name="title" type="text"/>
                </div>
                <div className='input-item'>
                    <label>Descripcion del Producto</label>
                    <input value={description} onChange={handleDescriptionChange} name="title" type="text" />
                </div>
                <div className='input-item'>
                    <label>Categoria</label>
                    <input value={category} onChange={handleCategoryChange} name="title" type="text" />
                </div>
                <div className='input-item'>
                    <label>Precio</label>
                    <input value={price} onChange={handlePriceChange} name="title" type="text" />
                </div>
                <div className='input-item'>
                    <label>Stock</label>
                    <input value={stock} onChange={handleStockChange} name="title" type="text" />
                </div>
                <div className='input-item'>
                    <label>Imagen</label>
                    <input name="file" onChange={handleImageChange}   type="file" />
                </div>
                <button className='add-to-cart-button' type="submit">Enviar</button>

            </form>

        </div>
    )
}
export default AddItemContainer;