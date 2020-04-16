const categoryReducer = (state = [], action) => {

    
    switch (action.type) {
        case 'CAT_SET':
            return action.payload;
        default:
            return state;
    }
}

export default categoryReducer