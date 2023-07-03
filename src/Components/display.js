function Items() {
	const[state, seState] = useState({
		items: [] });
        
        const click = ({target: {name}})=>{
            const{items} = state;
            setState({
                ...state,
                [name]: [{t: items.length, v: items.length}, ...state.items.slice(0)]
            })
}

const change = e => alert(e.target.value)

return (
    <div>
        <select onChange={change}>
            {state.items.map((item,i)=><option value={item.v +i}>{item.t}</option>)}
        </select>
        <button onClick={click} name="items">Items</button> 
    </div>
    )
}
