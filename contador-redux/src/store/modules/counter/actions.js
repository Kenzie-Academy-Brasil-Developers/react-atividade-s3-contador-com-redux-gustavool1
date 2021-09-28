export const addNumber = ( number  ) =>{
    return{
        type:'ADD_NUMBER',
        number
    }
}

export const subNumber = ( number ) =>{
    return{
        type: 'SUB_NUMBER',
        number
    }
}