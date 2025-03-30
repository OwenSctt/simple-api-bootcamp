document.querySelector('button').addEventListener('click', getSong)

function getSong(){
    const artist = document.getElementById('artist').value
    const title = document.getElementById('title').value

    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      console.log(data)
      document.querySelector('h3').innerHTML = data.lyrics
})
}

//https://api.lyrics.ovh/v1/${artist}/${title}