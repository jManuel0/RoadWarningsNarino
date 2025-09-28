import React, {useState} from 'react'

export default function Component() {

    const [Text, setText] = useState()
    const [Updated, setUpdatedText] = useState()

    const textOnChange = (event) => {
        setText(event.target.value)  
    }

    const buttonOnClick = () => {
        setUpdatedText(Text)
    }
    
  return (
    <div>
       <input type="Text" value={Text} onChange={textOnChange}/>
        <button onClick={buttonOnClick}>Actualizar</button>
        <p>Texto input:{Text} </p>
        <p>Texto input actualizado:{Updated}</p>
    </div>
  )
}
