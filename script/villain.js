const contenedor = document.getElementById('contenedor')
const mensaje = document.getElementById('mensaje')
let BdVillains
let solicitud = indexedDB.open('personajes')
solicitud.onsuccess = (e) => {
    BdVillains = e.target.result
}
const getHeros = async () => {
    try {
        const response = await fetch('https://akabab.github.io/superhero-api/api/all.json')
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}
const animacionBanner = ()=>{

    const letraUno = document.querySelector('.container__fondo__letra1')
    letraUno.classList.add('magictime','foolishIn')
    const letraDos = document.querySelector('.container__fondo__letra2')
    letraDos.classList.add('magictime', 'foolishIn')
    const letraTres = document.querySelector('.container__fondo__letra3')
    letraTres.classList.add('magictime', 'foolishIn')
    const letraCuatro = document.querySelector('.container__fondo__letra4')
    letraCuatro.classList.add('magictime', 'foolishIn')
    const letraCinco = document.querySelector('.container__fondo__letra5')
    letraCinco.classList.add('magictime', 'foolishIn')
    const letraSeis = document.querySelector('.container__fondo__letra6')
    letraSeis.classList.add('magictime', 'foolishIn')
    const letraSiete = document.querySelector('.container__fondo__letra7')
    letraSiete.classList.add('magictime', 'foolishIn')
    const letraOcho = document.querySelector('.container__fondo__letra8')
    letraOcho.classList.add('magictime', 'foolishIn')    
}
const animacionBannerQuit = ()=>{
    const letraUno = document.querySelector('.container__fondo__letra1')
    letraUno.classList.remove('magictime', 'foolishIn')
    const letraDos = document.querySelector('.container__fondo__letra2')
    letraDos.classList.remove('magictime', 'foolishIn')
    const letraTres = document.querySelector('.container__fondo__letra3')
    letraTres.classList.remove('magictime', 'foolishIn')
    const letraCuatro = document.querySelector('.container__fondo__letra4')
    letraCuatro.classList.remove('magictime', 'foolishIn')
    const letraCinco = document.querySelector('.container__fondo__letra5')
    letraCinco.classList.remove('magictime', 'foolishIn')
    const letraSeis = document.querySelector('.container__fondo__letra6')
    letraSeis.classList.remove('magictime', 'foolishIn')
    const letraSiete = document.querySelector('.container__fondo__letra7')
    letraSiete.classList.remove('magictime', 'foolishIn')
    const letraOcho = document.querySelector('.container__fondo__letra8')
    letraOcho.classList.remove('magictime', 'foolishIn') 
}
setTimeout(animacionBanner,400)
setTimeout(animacionBannerQuit,2700)
const mod = () => {
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
    //--------------------------------------------
    const botones = document.querySelectorAll('button')
    for (const btn of botones) {
        btn.addEventListener('click',()=>{modal.classList.add('show')})
    }
    for (const cards of secciones) {
        // const img = document.createElement('img')
        cards.addEventListener('click', () => {
            //modal.classList.add('show')
            fetch(`https://akabab.github.io/superhero-api/api/id/${cards.childNodes[0].textContent}.json`)
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
    modal.addEventListener('click', () => {
        modal.classList.remove('show')
    })
}
const getAll = async () => {
    const datos = await getHeros()
    const fragment = document.createDocumentFragment()
    for (const heros of datos) {
        if (heros.biography.alignment === 'bad') {
            const card = document.createElement("section");
            const name = document.createElement("p");
            const title = document.createElement("p");
            const numero = document.createElement("span");
            const spanAdd = document.createElement('div')
            const boton = document.createElement('button')
            boton.textContent = 'Ver información'
            boton.classList.add('boton')
            numero.textContent = heros.id;
            spanAdd.textContent = ''
            spanAdd.classList.add('agregar')
            card.classList.add("card");
            name.textContent = heros.name;
            title.textContent = "Características";
            const powerStat = document.createElement("ul");
            const li_intelligence = document.createElement("li");
            li_intelligence.textContent = `Inteligencia: ${heros.powerstats.intelligence}`;
            const li_strenght = document.createElement("li");
            li_strenght.textContent = `Fuerza: ${heros.powerstats.strength}`;
            const li_speed = document.createElement("li");
            li_speed.textContent = `Velocidad: ${heros.powerstats.speed}`;
            const li_durability = document.createElement("li");
            li_durability.textContent = `Durabilidad: ${heros.powerstats.durability}`;
            const li_power = document.createElement("li");
            li_power.textContent = `Poder: ${heros.powerstats.power}`;
            const li_combat = document.createElement("li");
            li_combat.textContent = `Combate: ${heros.powerstats.combat}`;
            const li_equipo = document.createElement("li");
            li_equipo.textContent = `Editora: ${heros.biography.publisher}`;
            const img = document.createElement("img");
            img.src = `${heros.images.md}`;
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
    for (const favoVillain of favo) {
        favoVillain.addEventListener('click', (e) => {
            favoVillain.classList.toggle('active')
            let id = parseInt(favoVillain.previousSibling.textContent)
            let nombre = favoVillain.nextSibling.textContent
            let transaction = BdVillains.transaction('tabla', 'readwrite').objectStore('tabla')
            if (favoVillain.classList.contains('active')) {
                let agregar = transaction.add({ id: id, nombre: nombre })
            } else {
                agregar = transaction.delete(id)
            }
            if (favoVillain.classList.contains('active')) {
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
    mod()

}
window.addEventListener('DOMContentLoaded', getAll)