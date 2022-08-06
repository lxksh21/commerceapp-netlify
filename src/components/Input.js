
const Input = props =>{
    reutrn (
        <div>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input id={props.input.id} {...props.input}/>
        </div>
    )
}