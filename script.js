//constantes
const contenedor = document.getElementById("contenedor");
const rangos = document.getElementById('rangos')
const buscar  = document.getElementById('buscar')


const getCharacters =async()=>{
  try {
    const res = await fetch('https://akabab.github.io/superhero-api/api/all.json')
    const data = await res.json()
    return data;
  } catch (error) {
    console.log(error)
  }
}
const pintar = async (rango = 0)=>{
  const data = await getCharacters()
  const fragment = document.createDocumentFragment();
  for (let i = 1; i <= rango; i++) {
    const card = document.createElement("section");
    const name = document.createElement("p");
    const title = document.createElement("p");
    const numero = document.createElement("span");
    numero.textContent = i;
    card.classList.add("card");
    name.textContent = data[i].name;
    title.textContent = "Características";
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
    const li_equipo = document.createElement("li");
    li_equipo.textContent = `Editora: ${data[i].biography.publisher}`;
    const img = document.createElement("img");
    img.src = `${data[i].images.md}`;
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
  contenedor.appendChild(fragment);
}
const filterName  = async(data)=>{
  const datos =  await getCharacters()
  const fragment = document.createDocumentFragment()
    if(data.length>=3){
      for (let i = 0; i < datos.length; i++) {
        //const element = datos[i];
          if(datos[i].name===data){
            contenedor.innerHTML  =''
            const card = document.createElement("section");
            const name = document.createElement("p");
            const title = document.createElement("p");
            const numero = document.createElement("span");
            numero.textContent = i;
            card.classList.add("card");
            name.textContent = datos[i].name;
            title.textContent = "Características";
            const powerStat = document.createElement("ul");
            const li_intelligence = document.createElement("li");
            li_intelligence.textContent = `Inteligencia: ${datos[i].powerstats.intelligence}`;
            const li_strenght = document.createElement("li");
            li_strenght.textContent = `Fuerza: ${datos[i].powerstats.strength}`;
            const li_speed = document.createElement("li");
            li_speed.textContent = `Velocidad: ${datos[i].powerstats.speed}`;
            const li_durability = document.createElement("li");
            li_durability.textContent = `Durabilidad: ${datos[i].powerstats.durability}`;
            const li_power = document.createElement("li");
            li_power.textContent = `Poder: ${datos[i].powerstats.power}`;
            const li_combat = document.createElement("li");
            li_combat.textContent = `Combate: ${datos[i].powerstats.combat}`;
            const li_equipo = document.createElement("li");
            li_equipo.textContent = `Editora: ${datos[i].biography.publisher}`;
            const img = document.createElement("img");
            img.src = `${datos[i].images.md}`;
            const link = document.createElement('a')
            link.setAttribute('hfef','#')
            link.classList.add('info')
            link.textContent = 'Información Adicional'
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
            card.appendChild(link)
            fragment.appendChild(card);
          } 
          contenedor.appendChild(fragment)
      }
    } else if(data.length<2){
      contenedor.innerHTML = ''
      paintCharacters(25)
    }
}
buscar.addEventListener('keyup' ,(e) =>{
  if(buscar.value!=''){
    filterName(e.target.value)
  }
})
const paintCharacters = (rango )=>{
  rango =25
  pintar(rango)
  
  }
 rangos.addEventListener('change',(e)=>{
   document.getElementById('buscar').value = ''
   rango = e.target.value
   if(rango==0){
     contenedor.innerHTML =`<h1 class="anuncio">Sin datos</h1>`
   }else{
     contenedor.innerHTML = ''
     pintar(rango)
   }
 })
window.addEventListener('DOMContentLoaded',paintCharacters,false)