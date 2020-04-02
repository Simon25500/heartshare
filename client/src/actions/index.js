export function inscription(body, callback) {
    const request = fetch(`/api/auth/signup`, {
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
    const request = fetch(`/api/auth/login`, {
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
    let request = fetch(`/api/auth/islog`, {
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