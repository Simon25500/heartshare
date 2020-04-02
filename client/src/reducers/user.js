const userReducer = (state = null, action) => {

    
    switch (action.type) {
        case 'USER_SET':
            return action.payload;
        default:
            return state;
    }
}

export default userReducer