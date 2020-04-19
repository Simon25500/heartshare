const positionReducer = (state = { center: {lat: 46.22,lng: 2.21 },zoom: 5, comp: 'list'},action) => {


    switch (action.type) {
        case 'SET_POSITION':
            return action.payload;
        default:
            return state;
    }
}

export default positionReducer;