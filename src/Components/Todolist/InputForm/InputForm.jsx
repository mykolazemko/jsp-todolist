import { useState } from "react"

const InputForm = ({addTodo}) => {

    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!value) return;
        addTodo(value)
        setValue("");
    }

    return(
        <div>
            <form >
                <input type="text" value={value} onChange={(event)=>setValue(event.target.value)}/>
                <button onClick={(event)=>handleSubmit(event)}>AddTodo</button>
              
            </form>
        </div>
    )
}
export default InputForm