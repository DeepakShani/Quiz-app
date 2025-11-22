export const initialState = [];

export const reducer = (state, action)=>{
    switch (action.type){
        case "ADD":{
            
            return [...state,{id:Date.now(),text:action.payload}]
        }

        case "DEL":{
            let filteredTodos = state.filter((ele)=>{
                return ele.id!=action.payload
            })

            return filteredTodos
        }
        
        default : state 
}
}