
import { useEffect, useRef ,useState} from 'react';
import InputModal from './Input-model'; 

function Ref() {
    const [quantity , setQuantity] = useState(0);
    const [modalOpen , setModalOpen] = useState(false)
    const handleQunatityChange = value =>{
        setQuantity(value);
    }
  return (
      <div>
   <h1>Qunatity : {quantity}</h1>
   <button onClick={()=>setModalOpen(!modalOpen)}>Edit Qunatity</button>
   {modalOpen && <InputModal handleSubmit={handleQunatityChange}onClose={()=>setModalOpen(false)}/>}
   </div>
  )
}

export default Ref