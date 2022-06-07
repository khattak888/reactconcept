import Input from "./Input";
import {useRef} from  'react'
import  './App.css';


export default function InputModal(props){
 const inputRef = useRef()


    const handleOnSubmit = (event)=>{
        event.preventDefault();
        props.handleSubmit(inputRef.current.value); 
        //Handle modal Closing
        props.onClose()
    }
    return(
        <div className="modal--overlay">
            <div className="modal">
                <h1>Edit Quantity Here</h1>
                <form action="?" onSubmit={handleOnSubmit}>
                    <Input id='quantity-input' labelText='Quantity' ref={inputRef}/>
                    <button type="submit">Save Qunatity</button>
                </form>
            </div>
        </div>
    )
}
