const userReducer = (state, action) => {
    if (state === undefined) {
        return {};
    }

    switch (action.type) {
        case 'CHECK_USER':
            return action.payload;
        default:
            return state;
    }
}

export default userReducer