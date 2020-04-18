
export function inscription(body, callback) {
    fetch(`/api/auth/signup`, {
        method:'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
        }).then(response => response.json())
        .then(data => {localStorage.setItem('token', data.token)})
        .then(callback);

        
    return {
    type: 'USER_SET', // Not used by reducer (we navigate)
    payload: localStorage.getItem('token')
    };
}

export function connexion(body, callback) {
    fetch(`/api/auth/login`, {
        method:'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
        }).then(response => response.json())
        .then(data => {localStorage.setItem('token', data.token)})
        .then(callback);

    return {
    type: 'USER_SET', // Not used by reducer (we navigate)
    payload: localStorage.getItem('token')
    };
}

export const isLog =  () => {
    const request = fetch(`/api/auth/islog`, {
        method:'GET',
        headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`}
        }).then(response => response.json());

        
        return {
            type: 'USER_SET', // Not used by reducer (we navigate)
            payload: request
            };
}

export const cardSet = (card) => {
    let request;

    if (!card){
        request = fetch('/api/event/index', {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        }).then(reponse => reponse.json())
        .catch(err => err.json())
    } else {
        request = card;
    }


    return {
        type: 'CARD_SET',
        payload: request
    };
}

export const cardActive = (card) => {
    return {
        type: 'ACTIV_CARD_SET',
        payload: card
    };
}

export const setNear = (position) => {
    const request = fetch('/api/near/index', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(position)
    }).then(reponse => reponse.json())
    .catch(err => err.json)

    return {
        type: 'CARD_SET',
        payload:request
    }
}

export const setCat = (category) => {
    let request = ""
    if (category){
        request = category
    } else {
        request = fetch('/api/category/index',{
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        }).then(reponse => reponse.json())
        .catch(err => err.json)
    }
    return{
        type: 'CAT_SET',
        payload: request
    }
}


export const setAssoc = (category) => {

    const request = fetch('/api/association/index',{
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        }).then(reponse => reponse.json())
        .catch(err => err.json)
    
    return{
        type: 'ASSOC_SET',
        payload: request
    }
}

export const assocShow = (id) => {

    const request = fetch(`/api/association/${id}`, {
        method: 'GET',
        headers: {"Content-Type": "application/json"}
    }).then(reponse => reponse.json())
    .catch(err => err.json)
    
    return {
        type : 'ACTIV_ASSOC_SET',
        payload: request
    }


}

export const setPosition = (position) => {

    return {
        type: 'SET_POSITION',
        payload: position
    }
}