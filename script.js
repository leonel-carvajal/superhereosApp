const contenedor = document.getElementById("contenedor");

const getSuperheroes = async (url = '') => {
  url = "https://akabab.github.io/superhero-api/api/all.json";
  try {
    const response = await axios(url);
    const data = await response.data;
    const fragment = document.createDocumentFragment();
    for (const datos of data) {
        //creando card
        const card = document.createElement('section')
        const name = document.createElement("p");
        const title = document.createElement('p')
        card.classList.add('card')
        name.textContent = datos.name;
        title.textContent = 'Características'
        const powerStat = document.createElement("ul");
        const li_intelligence = document.createElement("li");
        li_intelligence.textContent = `Inteligencia: ${datos.powerstats.intelligence}`;
        const li_strenght = document.createElement("li");
        li_strenght.textContent = `Fuerza: ${datos.powerstats.strength}`;
        const li_speed = document.createElement("li");
        li_speed.textContent = `Velocidad: ${datos.powerstats.speed}`;
        const li_durability = document.createElement("li");
        li_durability.textContent = `Durabilidad: ${datos.powerstats.durability}`;
        const li_power = document.createElement("li");
        li_power.textContent = `Poder: ${datos.powerstats.power}`;
        const li_combat = document.createElement("li");
        li_combat.textContent = `Combate: ${datos.powerstats.combat}`;
        const li_equipo = document.createElement('li')
        li_equipo.textContent = `Editora: ${datos.biography.publisher}`
        const img = document.createElement('img')
        img.src = `${datos.images.md}`
        powerStat.appendChild(li_intelligence);
        powerStat.appendChild(li_strenght);
        powerStat.appendChild(li_speed);
        powerStat.appendChild(li_durability);
        powerStat.appendChild(li_power);
        powerStat.appendChild(li_combat);
        powerStat.appendChild(li_equipo)
        card.appendChild(name)
        card.appendChild(img)
        card.appendChild(title)
        card.appendChild(powerStat)
        fragment.appendChild(card)
    }
    contenedor.appendChild(fragment);
  } catch (error) {
    console.log(error);
  }
};
window.addEventListener('load',getSuperheroes,false)