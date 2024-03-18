const h2 = document.getElementById('hits')
fetch('http://localhost:4000/hits')
    .then(r => r.json())
    .then(r => {
        console.log(r)
        h2.textContent = r
    }).catch((err) => console.log(err))