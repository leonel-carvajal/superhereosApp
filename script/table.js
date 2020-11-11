const tableBody = document.getElementById('tableBody')

const Cargar =async ()=>{
    try {
        const response = await fetch('https://akabab.github.io/superhero-api/api/all.json')
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}
const Paint = async()=>{
    const datos = await Cargar()
    const fragment = document.createDocumentFragment();
    for (const data of datos) {
        const TR = document.createElement('tr')
        const img = document.createElement('img')
        const tdImg =document.createElement('td')
        const tdId = document.createElement('td')
        tdId.textContent = `${data.id}`
        const tdName = document.createElement('td')
        tdName.textContent = `${data.name}`
        const tdInte = document.createElement('td')
        tdInte.textContent = `${data.powerstats.intelligence}`
        const tdfuerza = document.createElement('td')
        tdfuerza.textContent = `${data.powerstats.strength}`
        const tdVelo = document.createElement('td')
        tdVelo.textContent = `${data.powerstats.speed}`
        const tdDura = document.createElement('td')
        tdDura.textContent = `${data.powerstats.durability}`
        const tdpoder = document.createElement('td')
        tdpoder.textContent = `${data.powerstats.power}`
        const tdcomba =document.createElement('td')
        tdcomba.textContent = `${data.powerstats.combat}`
        img.src = `${data.images.xs}`
        tdImg.appendChild(img)
        TR.appendChild(tdImg)
        TR.appendChild(tdId)
        TR.appendChild(tdName)
        TR.appendChild(tdInte)
        TR.appendChild(tdfuerza)
        TR.appendChild(tdVelo)
        TR.appendChild(tdDura)
        TR.appendChild(tdpoder)
        TR.appendChild(tdcomba)
        fragment.appendChild(TR)
    }
    tableBody.appendChild(fragment);
}
window.addEventListener('DOMContentLoaded',Paint)