let body = document.querySelector("tbody");


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => json.forEach(element => {
        body.innerHTML +=
            ` <tr>
            <th scope="row">${element.id}</th>
            <td>${element.userId}</td>
            <td>${element.title}</td>
            <td>${element.body}</td>
        </tr>`
    }))

// for in'e salanda da isleyir, bele de?