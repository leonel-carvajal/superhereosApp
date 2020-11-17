const contenedor = document.getElementById('contenedor')

const getMarvel = async () => {
  try {
    const res = await fetch('https://akabab.github.io/superhero-api/api/all.json')
    const data = await res.json()
    getAllMarvel(Array.from(data))
  } catch (error) {
    console.log(error)
  }
}

const modal = () => {
  const sectionDc = document.querySelectorAll('section')
  const modal = document.getElementById('modal')
  const modal_content = document.getElementById('modal__content')
  const fragment2 = document.createDocumentFragment()
  const img = document.getElementById('img1')
  const modalName = document.getElementById('modal_name')
  const modalTitulo = document.getElementById('titulos')
  const modalCara = document.getElementById('modal_cara')
  const modalApa = document.getElementById('modal_apa')
  const modalBio = document.getElementById('modal_bio')
  const modalWork = document.getElementById('modal_work')
  const modalConexion = document.getElementById('modal_conexion')


  for (const cardsMarvel of sectionDc) {
    cardsMarvel.addEventListener('click', () => {
      modal.classList.add('show')
      fetch(`https://akabab.github.io/superhero-api/api/id/${cardsMarvel.childNodes[0].textContent}.json`)
        .then(res => res.json())
        .then(data => {
          modalName.textContent = data.name
          img.src = data.images.sm
          modalCara.children[0].textContent = 'Características'
          modalCara.children[1].textContent = `Inteligencia: ${data.powerstats.intelligence}`
          modalCara.children[2].textContent = `Fuerza: ${data.powerstats.strength}`
          modalCara.children[3].textContent = `Velocidad: ${data.powerstats.speed}`
          modalCara.children[4].textContent = `Durabilidad: ${data.powerstats.durability}`
          modalCara.children[5].textContent = `Poder: ${data.powerstats.power}`
          modalCara.children[6].textContent = `Combate: ${data.powerstats.combat}`
          modalCara.children[7].textContent = `Editora: ${data.biography.publisher}`

          modalApa.children[0].textContent = 'Apariencia'
          modalApa.children[1].textContent = `Genero: ${data.appearance.gender}`
          modalApa.children[2].textContent = `Raza: ${data.appearance.race}`
          modalApa.children[3].textContent = `Altura: ${data.appearance.height[1]}`
          modalApa.children[4].textContent = `Peso: ${data.appearance.weight[1]}`
          modalApa.children[5].textContent = `Ojos: ${data.appearance.eyeColor}`
          modalApa.children[6].textContent = `Cabello: ${data.appearance.hairColor}`

          modalBio.children[0].textContent = 'Biografía'
          modalBio.children[1].textContent = `Nombre completo: ${data.biography.fullName}`
          modalBio.children[2].textContent = `Alter Ego: ${data.biography.alterEgos}`
          modalBio.children[3].textContent = `Alias: ${data.biography.aliases}`
          modalBio.children[4].textContent = `Lugar Nacimiento: ${data.biography.placeOfBirth}`
          modalBio.children[5].textContent = `Primera Aparición: ${data.biography.firstAppearance}`
          modalBio.children[6].textContent = `Editora: ${data.biography.publisher}`
          modalBio.children[7].textContent = `Bando: ${data.biography.alignment}`

          modalWork.children[0].textContent = 'Trabajo'
          modalWork.children[1].textContent = `Ocupacion: ${data.work.occupation}`
          modalWork.children[2].textContent = `Base:${data.work.base}`

          modalConexion.children[0].textContent = 'Equipos'
          modalConexion.children[1].textContent = `Afiliación: ${data.connections.groupAffiliation}`
          modalConexion.children[2].textContent = `Relativos: ${data.connections.relatives}`
        })
    })
    modalTitulo.appendChild(modalName)
    modalTitulo.appendChild(img)
    fragment2.appendChild(modalTitulo)
  }
  modal_content.appendChild(fragment2)
  modal.addEventListener('click', () => modal.classList.remove('show'))
}
const getAllMarvel = (data) => {
  const fragment = document.createDocumentFragment()
  for (const marvelComics of data) {
    if (marvelComics.biography.publisher === 'Marvel Comics') {
      const card = document.createElement("section");
      const name = document.createElement("p");
      const title = document.createElement("p");
      const numero = document.createElement("span");
      numero.textContent = marvelComics.id;
      card.classList.add("card");
      name.textContent = marvelComics.name;
      title.textContent = "Características";
      const powerStat = document.createElement("ul");
      const li_intelligence = document.createElement("li");
      li_intelligence.textContent = `Inteligencia: ${marvelComics.powerstats.intelligence}`;
      const li_strenght = document.createElement("li");
      li_strenght.textContent = `Fuerza: ${marvelComics.powerstats.strength}`;
      const li_speed = document.createElement("li");
      li_speed.textContent = `Velocidad: ${marvelComics.powerstats.speed}`;
      const li_durability = document.createElement("li");
      li_durability.textContent = `Durabilidad: ${marvelComics.powerstats.durability}`;
      const li_power = document.createElement("li");
      li_power.textContent = `Poder: ${marvelComics.powerstats.power}`;
      const li_combat = document.createElement("li");
      li_combat.textContent = `Combate: ${marvelComics.powerstats.combat}`;
      const li_equipo = document.createElement("li");
      li_equipo.textContent = `Editora: ${marvelComics.biography.publisher}`;
      const img = document.createElement("img");
      img.src = `${marvelComics.images.md}`;
      powerStat.appendChild(li_intelligence);
      powerStat.appendChild(li_strenght);
      powerStat.appendChild(li_speed);
      powerStat.appendChild(li_durability);
      powerStat.appendChild(li_power);
      powerStat.appendChild(li_combat);
      powerStat.appendChild(li_equipo);
      card.appendChild(numero);
      card.appendChild(name);
      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(powerStat);
      fragment.appendChild(card);
    }
  }
  contenedor.appendChild(fragment)
  modal()
}

window.addEventListener('DOMContentLoaded', getMarvel, false)