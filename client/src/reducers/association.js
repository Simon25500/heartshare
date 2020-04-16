const associationReducer = (state = [], action) => {

    
    switch (action.type) {
        case 'ASSOC_SET':
            return action.payload;
        default:
            return state;
    }
}

export default associationReducer