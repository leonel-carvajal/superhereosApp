let arrayTeam = []
let count = 0
const barra = document.getElementById('barra')
const getAllTeam = async () => {
  const reponse = await fetch('https://akabab.github.io/superhero-api/api/all.json')
  const data = await reponse.json()
  return data
}

const filtrar = (Element) => {
  return
}
const getTeam = async () => {
  const datos = await getAllTeam()
  for (const teams of datos) {
    arrayTeam.push(teams.connections.groupAffiliation)
  }
}
const imagenes = () => {
  const imagenes = ['dccomics.jpg', 'dcMarvel.jpg', 'fondo.jpg', 'fondo3.jpg', 'marvel.jpg', 'hero1.jpg',
    'hero2.jpg', 'hero3.jpg', 'maevel2.jpg', 'hero3.jpg', 'hero4.jpg', 'hero5.jpg']
  let cont = 0
  let ultima = imagenes.length - 1
  setInterval(() => {
    barra.style.backgroundImage = `url(/img/${imagenes[cont]})`
    cont++
    if (cont > ultima || cont == ultima) {
      cont = 0
    }
  }, 10000)
}
imagenes()
window.addEventListener('DOMContentLoaded', getTeam, false)