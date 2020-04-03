const cardReducer = (state = [], action) => {

    
    switch (action.type) {
        case 'CARD_SET':
            return action.payload;
        default:
            return state;
    }
}

export default cardReducer