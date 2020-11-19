//funcion para obtener datos de indexedDB
let database = null
let datos
const contenedor = document.getElementById("contenedor");
const comenzar = () => {
  let elementos = []
  database = indexedDB.open('personajes')
  database.onsuccess = (e) => {
    datos = e.target.result
    let tranns = datos.transaction('tabla').objectStore('tabla')
    let cursor = tranns.openCursor().onsuccess= ((e)=>{
      let cur = e.target.result
      if(cur){
        elementos.push(cur.value)
        cur.continue()
        
      }else{
        fetch('https://akabab.github.io/superhero-api/api/all.json')
        .then(res=>res.json())
        .then(data=>{
          for (const characters of data) {
            for (const item of elementos) {
              if(characters.id===item.id){
                favCharacters(characters)
              }
            }
          }
          pintarModal()
        })
      }
    }) 
  }
}
const favCharacters = (datosFav)=>{
  const fragment = document.createDocumentFragment()
  const card = document.createElement("section");
  const name = document.createElement("p");
  const title = document.createElement("p");
  const numero = document.createElement("span");
  const spanAdd = document.createElement('div')
  const boton = document.createElement('button');
  boton.classList.add('boton')
  boton.textContent = 'Ver información'
  numero.textContent = datosFav.id;
  spanAdd.textContent = 'Eliminar'
  spanAdd.classList.add('btn-eliminar')
  card.classList.add("card");
  name.textContent = datosFav.name;
  title.textContent = "Características";
  const powerStat = document.createElement("ul");
  const li_intelligence = document.createElement("li");
  li_intelligence.textContent = `Inteligencia: ${datosFav.powerstats.intelligence}`;
  const li_strenght = document.createElement("li");
  li_strenght.textContent = `Fuerza: ${datosFav.powerstats.strength}`;
  const li_speed = document.createElement("li");
  li_speed.textContent = `Velocidad: ${datosFav.powerstats.speed}`;
  const li_durability = document.createElement("li");
  li_durability.textContent = `Durabilidad: ${datosFav.powerstats.durability}`;
  const li_power = document.createElement("li");
  li_power.textContent = `Poder: ${datosFav.powerstats.power}`;
  const li_combat = document.createElement("li");
  li_combat.textContent = `Combate: ${datosFav.powerstats.combat}`;
  const li_equipo = document.createElement("li");
  li_equipo.textContent = `Editora: ${datosFav.biography.publisher}`;
  const img = document.createElement("img");
  img.src = `${datosFav.images.md}`;
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
  contenedor.appendChild(fragment)
}

const pintarModal = ()=>{
  const secciones = document.getElementsByTagName('section')
  const modal = document.getElementById('modal')
  const modal_content = document.getElementById('modal__content')
  const img = document.getElementById('img1')
  const fragment2 = document.createDocumentFragment()
  const modalName = document.getElementById('modal_name')
  const modalTitulo = document.getElementById('titulos')
  const modalCara = document.getElementById('modal_cara')
  const modalApa = document.getElementById('modal_apa')
  const modalBio = document.getElementById('modal_bio')
  const modalWork = document.getElementById('modal_work')
  const modalConexion = document.getElementById('modal_conexion')
  const mensaje = document.getElementById('mensaje')
  const botones = document.querySelectorAll('button')
  for (const btn of botones) {
    btn.addEventListener('click', (e) => {
      e.preventDefault()
      modal.classList.add('show')
    })
  }
  const botonEliminar = document.querySelectorAll('.btn-eliminar')
    for (const eliminar of botonEliminar) {
      eliminar.addEventListener('click',(e)=>{
        let id = parseInt(eliminar.previousSibling.textContent)
        let transaction = datos.transaction('tabla','readwrite').objectStore('tabla')
        transaction.delete(id)
        mensaje.textContent = 'Personaje Eliminado de favoritos'
        mensaje.classList.add('confirmar')
        setTimeout(() => {
          mensaje.classList.remove('confirmar')
          e.preventDefault()
        }, 3000)
        eliminar.parentElement.remove()
        
      })
    }
  for (const cards of secciones) {
    cards.addEventListener('click',(e)=>{
      fetch(`https://akabab.github.io/superhero-api/api/id/${cards.childNodes[0].textContent}.json`)
        .then(res => res.json())
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

window.addEventListener('DOMContentLoaded',comenzar)

// window.addEventListener('beforeunload', () => {
//   let req = indexedDB.deleteDatabase('personajes')
//   req.onsuccess = () => {
//     console.log('Base de datos borrada')
//   }
//   req.onerror = () => {
//     console.log('no se pudo borar base de datos')
//   }
//   req.onblocked = () => {
//     console.log('Nose pudo borrar base de datos|| operación bloqueada')
//   }
// })