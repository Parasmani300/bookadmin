import React, { useState } from 'react'

export default function AddBook() {
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [upc,setUpc] = useState("");
    const [sku,setSku] = useState("");
    const [publisher,setPublisher] = useState("");
    const [costPrice,setCostPrice] = useState(0);
    const [retailPrice,setRetailPrice] = useState(0);

    const postBook = () => {
        let payload = {
            name,
            description,
            upc,
            sku,
            publisher,
            costPrice,
            retailPrice
        }

        // Api call to post the details here

        console.log(payload);
    }

  return (
    <div >
        <h3 style={{color:"blue"}}>Add a Book to Store</h3>
        <div className='form-group'>
            <label>Book Name</label>
            <input 
                className='form-control' 
                type={"text"} 
                name="bookName" 
                placeholder='Playing it my Way'
                onChange={(e)=>setName(e.target.value)}
            />
        </div>
        <div className='form-group'>
            <label>Description</label>
            <textarea rows={"4"} className="form-control"
                   onChange={(e)=>setDescription(e.target.value)}
                 placeholder='Book written on the life of Sachin. Put your book description similarlt here'
            ></textarea>
        </div>
        <div className='form-group'>
            <label>Item UPC</label>
            <input 
                className='form-control' 
                type={"text"} 
                name="UPC" 
                placeholder='1234567890'
                onChange={(e)=>setUpc(e.target.value)}
            />
        </div>
        <div className='form-group'>
            <label>SKU</label>
            <input 
                className='form-control' 
                type={"text"} 
                name="SKU" 
                placeholder='123456'
                onChange={(e)=>setSku(e.target.value)}
            />
        </div>
        <div className='form-group'>
            <label>Publisher</label>
            <input 
                className='form-control' 
                type={"text"} 
                name="publisher" 
                placeholder='Hooder & Stouutgun'
                onChange={(e)=>setPublisher(e.target.value)}
            />
        </div>
        <div className='form-group'>
            <label>Retail Price</label>
            <input 
                className='form-control' 
                type={"number"} 
                name="retailPrice" 
                placeholder='200'
                onChange={(e)=>setRetailPrice(e.target.value)}
            />
        </div>
        <div className='form-group'>
            <label>Cost Price</label>
            <input 
                className='form-control' 
                type={"text"} 
                name="costPrice" 
                placeholder='180'
                onChange={(e)=>setCostPrice(e.target.value)}
            />
        </div>
        <div className='form-group'>
            <br />
            <button
                 className='form-control btn btn-primary'
                 onClick={()=>postBook()}>Add Now</button>
        </div>
    </div>
  )
}
