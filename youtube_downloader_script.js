const url = document.querySelector('.URL-input')
const buttonConverter = document.querySelector('.convert-button')

const sendUrl = (url) => {
    if (url === undefined || url === '') {
        alert("Necesita poner la url para descargar el video")
        return
    } 

    const urlServer = `https://server-yt-downloadr.onrender.com/download?url=${url}`
    window.location.href = urlServer
}

buttonConverter.addEventListener('click', () => {
    sendUrl(url.value)
})
