// add code snippets from README
let container=document.getElementById("container")
let state;

function reducer(state={count:0},action){
    switch(action.type){
        case "counter/increment":
            return {count: state.count+1}
        default:
            return state
    }
}

function dispatch(action){
    state=reducer(state,action)
    render()
}

function render(){
 let button=document.getElementById("button");
 container.textContent=state.count

}

button.addEventListener("click",()=>{
    dispatch({type:"counter/increment"})
})
dispatch({type:"@@INIT"})