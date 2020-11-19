const contenedor = document.getElementById('contenedor')
const mensaje = document.getElementById('mensaje')
let BdDC
let solicitud = indexedDB.open('personajes')
solicitud.onsuccess = (e)=>{
  BdDC = e.target.result
}
const getDc = async () => {
  try {
    const res = await fetch('https://akabab.github.io/superhero-api/api/all.json')
    const data = await res.json()
    getAllDc(Array.from(data))
  } catch (error) {
    console.log(error)
  }
}

const modal = ()=>{
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
    const botones = document.querySelectorAll('button')
    //-----------------------------------
    for (const btn of botones) {
        btn.addEventListener('click',()=>{modal.classList.add('show')})
    }
    for (const cardsDC of sectionDc) {
      cardsDC.addEventListener('click',()=>{
        //modal.classList.add('show')
        fetch(`https://akabab.github.io/superhero-api/api/id/${cardsDC.childNodes[0].textContent}.json`)
        .then(res=>res.json())
        .then(data=>{
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
    modal.addEventListener('click',()=>modal.classList.remove('show'))
}
const getAllDc = (data) => {
  const fragment = document.createDocumentFragment()
  for (const dcComics of data) {
    if (dcComics.biography.publisher === 'DC Comics') {
      const card = document.createElement("section");
      const name = document.createElement("p");
      const title = document.createElement("p");
      const numero = document.createElement("span");
      const spanAdd = document.createElement('div')
      const boton =document.createElement('button')
      boton.textContent = 'Ver información'
      boton.classList.add('boton')
      numero.textContent = dcComics.id;
      spanAdd.textContent = ''
      spanAdd.classList.add('agregar')
      card.classList.add("card");
      name.textContent = dcComics.name;
      title.textContent = "Características";
      const powerStat = document.createElement("ul");
      const li_intelligence = document.createElement("li");
      li_intelligence.textContent = `Inteligencia: ${dcComics.powerstats.intelligence}`;
      const li_strenght = document.createElement("li");
      li_strenght.textContent = `Fuerza: ${dcComics.powerstats.strength}`;
      const li_speed = document.createElement("li");
      li_speed.textContent = `Velocidad: ${dcComics.powerstats.speed}`;
      const li_durability = document.createElement("li");
      li_durability.textContent = `Durabilidad: ${dcComics.powerstats.durability}`;
      const li_power = document.createElement("li");
      li_power.textContent = `Poder: ${dcComics.powerstats.power}`;
      const li_combat = document.createElement("li");
      li_combat.textContent = `Combate: ${dcComics.powerstats.combat}`;
      const li_equipo = document.createElement("li");
      li_equipo.textContent = `Editora: ${dcComics.biography.publisher}`;
      const img = document.createElement("img");
      img.src = `${dcComics.images.md}`;
      powerStat.appendChild(li_intelligence);
      powerStat.appendChild(li_strenght);
      powerStat.appendChild(li_speed);
      powerStat.appendChild(li_durability);
      powerStat.appendChild(li_power);
      powerStat.appendChild(li_combat);
      powerStat.appendChild(li_equipo);
      card.appendChild(numero);
      card.appendChild(spanAdd)
      card.appendChild(name);
      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(powerStat);
      card.appendChild(boton)
      fragment.appendChild(card);
    }
  }
  contenedor.appendChild(fragment)
  const favo = document.querySelectorAll('.agregar')
  for (const favDc of favo) {
    favDc.addEventListener('click',(e)=>{
      favDc.classList.toggle('active')
      let id = parseInt(favDc.previousSibling.textContent)
      let nombre = favDc.nextSibling.textContent
      let transaction = BdDC.transaction('tabla','readwrite').objectStore('tabla')
        if(favDc.classList.contains('active')){
          let agregar = transaction.add({id:id,nombre:nombre})
        }else{
          agregar = transaction.delete(id)
        }
      if (favDc.classList.contains('active')) {
        mensaje.textContent = 'Personajes agregado a favorito'
        mensaje.classList.add('confirmar')
        setTimeout(() => {
          mensaje.classList.remove('confirmar')
          e.preventDefault()
        }, 3000)
      } else {
        mensaje.classList.remove('confirmar')
      }
    })
  }
  modal()
}

window.addEventListener('DOMContentLoaded', getDc, false)