


import { forwardRef } from 'react'

function Input(props , ref) {
  return (
    <>
    <label htmlFor={props.id}>
                 {props.labelText}
             </label>
             <input name={props.id} id={props.id} ref={ref} />
    
    </>
  )
}

export default forwardRef(Input)