import { useState } from 'react'


function FirstComponent(props){
  const [ isUpsideDown, setIsUpsideDown ] = useState(false)
  let message = 'I am normal'
  if (isUpsideDown) {
    message = 'I am upside down'

  }
  function makeTheChange(){
    setIsUpsideDown(!isUpsideDown)
  }
  return(
    <div onClick={makeTheChange}>
    { message }
    { props.animal }
    </div>
    )
  }

  export default FirstComponent