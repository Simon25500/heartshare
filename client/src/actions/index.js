export function inscription(body, callback) {
    const request = fetch(`/api/auth/signup`, {
        method:'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
        }).then(response => response.json())
        .then(data => { localStorage.setItem('token', data.token)})
        .then(callback);

    return {
    type: 'SIGN_UP', // Not used by reducer (we navigate)
    payload: request
    };
}

export function connexion(body, callback) {
    console.log(body)
    const request = fetch(`/api/auth/login`, {
        method:'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
        }).then(response => response.json())
        .then(data => { localStorage.setItem('token', data.token)})
        .then(callback);

    return {
    type: 'LOGIN', // Not used by reducer (we navigate)
    payload: request
    };
}

export const isLog =  () => {
    const request = fetch(`/api/auth/signup`, {
        method:'GET',
        headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`}
        }).then(response => response.json())
        .then(data => console.log(data))
}