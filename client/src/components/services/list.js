export function getDB() {
    return fetch('http://localhost:3333/db')
        .then(data => data.json())
}