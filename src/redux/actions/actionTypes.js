const addToCart = (product) => {
    return{
        type : "ADD",
        product : product
    }
}

const delFromCart = (product) => {
    return{
        type : "DEL",
        product : product
    }
}

export {addToCart , delFromCart}