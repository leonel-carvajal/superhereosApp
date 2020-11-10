const contenedor = document.getElementById("contenedor");
const rangos = document.getElementById('rangos')

const getCharacters =async()=>{
  try {
    const res = await fetch('https://akabab.github.io/superhero-api/api/all.json')
    const data = await res.json()
    return data;
  } catch (error) {
    console.log(error)
  }
}
const paintCharacters = async(rango)=>{
  const data = await getCharacters()
  rango = Math.round(Math.random*100)
  const fragment = document.createDocumentFragment();
    for (let i=1;i<=rango;i++) {
        const card = document.createElement('section')
        const name = document.createElement("p");
        const title = document.createElement('p')
        const numero = document.createElement('span')
        numero.textContent = i
        card.classList.add('card')
        name.textContent = data[i].name;
        title.textContent = 'Características'
        const powerStat = document.createElement("ul");
        const li_intelligence = document.createElement("li");
        li_intelligence.textContent = `Inteligencia: ${data[i].powerstats.intelligence}`;
        const li_strenght = document.createElement("li");
        li_strenght.textContent = `Fuerza: ${data[i].powerstats.strength}`;
        const li_speed = document.createElement("li");
        li_speed.textContent = `Velocidad: ${data[i].powerstats.speed}`;
        const li_durability = document.createElement("li");
        li_durability.textContent = `Durabilidad: ${data[i].powerstats.durability}`;
        const li_power = document.createElement("li");
        li_power.textContent = `Poder: ${data[i].powerstats.power}`;
        const li_combat = document.createElement("li");
        li_combat.textContent = `Combate: ${data[i].powerstats.combat}`;
        const li_equipo = document.createElement('li')
        li_equipo.textContent = `Editora: ${data[i].biography.publisher}`
        const img = document.createElement('img')
        img.src = `${data[i].images.md}`
        powerStat.appendChild(li_intelligence);
        powerStat.appendChild(li_strenght);
        powerStat.appendChild(li_speed);
        powerStat.appendChild(li_durability);
        powerStat.appendChild(li_power);
        powerStat.appendChild(li_combat);
        powerStat.appendChild(li_equipo)
        card.appendChild(numero)
        card.appendChild(name)
        card.appendChild(img)
        card.appendChild(title)
        card.appendChild(powerStat)
        fragment.appendChild(card)
    }
    contenedor.appendChild(fragment)
  }
  rangos.addEventListener('change',(e)=>{
})
window.addEventListener('DOMContentLoaded',paintCharacters,false)