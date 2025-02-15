const cartReducer = (state = [] , action)=>{
    
    const product = action.product
    let updatedCart

    switch(action.type){
        case "ADD" :
            const exist = state.find((item)=>{
                return item.id === product.id
            })
            if(exist){
                updatedCart = state.map((item)=>
                    item.id === product.id ? {...item , count: item.count+1} : item
                )
            }else{
                updatedCart = [...state , {...product , count : 1}]
            }
            return updatedCart
        case "DEL" :
            const exist2 = state.find((item)=>{
                return item.id === product.id
            })
            if(exist2 && exist2.count==1){
                updatedCart = state.filter((item)=>{
                    return item.id !== exist2.id
                })
            }else{
                updatedCart = state.map((item)=>
                    item.id === product.id ? {...item , count: item.count-1} : item
                )
            }
            return updatedCart
        default : 
            return state
    }
}

export default cartReducer