let arrayTeam = []
let count = 0
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
window.addEventListener('DOMContentLoaded', getTeam, false)