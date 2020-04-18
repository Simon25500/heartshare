const activeAssocReducer = (state = {}, action) => {

    
    switch (action.type) {
        case 'ACTIV_ASSOC_SET':
            return action.payload;
        default:
            return state;
    }
}

export default activeAssocReducer;