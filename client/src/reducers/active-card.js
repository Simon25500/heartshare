const activeCardReducer = (state = {}, action) => {

    
    switch (action.type) {
        case 'ACTIV_CARD_SET':
            return action.payload;
        default:
            return state;
    }
}

export default activeCardReducer;