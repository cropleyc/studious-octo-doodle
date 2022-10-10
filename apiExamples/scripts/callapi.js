const url = 'https://api.chucknorris.io/jokes/random';
fetch(url)
.then(data => data.json())
.then((json) => {
    alert(JSON.stringify(json));
})