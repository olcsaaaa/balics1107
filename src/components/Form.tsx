import {IInput} from "@/interfaces/form";

export default function Form(
    {inputs}:{
        inputs:Array<IInput>
    }) {
    return (
        <form>
            {JSON.stringify(inputs)}
            {inputs&&inputs.map((input)=>(
                <>
                    <label>{input.label}</label>
                    <input type={input.type} id={input.id}/>
                </>
            ))}
        </form>
    )
}