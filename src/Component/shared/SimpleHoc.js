export const SimpleHoc = (Component)=>{

    const newProps = "passed from Hoc"
    return(props)=><Component newProps={newProps} {...props}/>
}