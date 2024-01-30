"use client"
import { useRef, useState } from "react";
import Image from "next/image";
import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
    const [pickedImage,setPickedImage]=useState()
    const ImageInput=useRef()

const handleClick=()=>{
    ImageInput.current.click()
}

const handleInputChange=(event)=>{
const file=event.target.files[0]
if (!file) {
    setPickedImage(null);
    return;
  }
//read the file
const fileReader=new FileReader();

fileReader.onload=()=>{
    setPickedImage(fileReader.result)
}

fileReader.readAsDataURL(file)

}

  return (
    <div className={classes.picker}>
      <label
        // htmlFor="Image"
        htmlFor={name}
      >
        {label}
      </label>
      <div className={classes.controls}>
        <div className={classes.preview}>
  {!pickedImage && <p>Image not Picked yet.</p>}
  {pickedImage && (
  <Image
    src={pickedImage}
    alt="The image selected by the user"
    // width={100}
    // height={100}
    // onError={(e) => console.error("Error loading image:", e)}
    fill
  />
)}

        </div>
        <input
        className={classes.input}
        // this class with help to hiden this input 
          type="file"
          //  id="image"
          id={name}
          accept="image/png, image/jpeg"
          // name="image"
          name={name}

          ref={ImageInput}
          onChange={handleInputChange}
          required
        />
        <button className={classes.button} type="submit"  onClick={handleClick}>Pick an Image</button>
      </div>
    </div>
  );
}
