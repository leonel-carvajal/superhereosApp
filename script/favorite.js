//funcion para obtener datos de indexedDB
let database = null
let datos
let personajes = []
const comenzar = (elementos = []) => {
  database = indexedDB.open('personajes')
  database.onsuccess = (e) => {
    datos = bd = e.target.result
    let tranns = datos.transaction('tabla').objectStore('tabla')
    let cursor = tranns.openCursor().onsuccess= ((e)=>{
      let cur = e.target.result
      if(cur){
        elementos.push(cur.value)
        cur.continue()
      }
    }) 
  }
}
comenzar(personajes)

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
   // tranns.openCursor().onsuccess = function (eve) {
    //   let result = eve.target.result
    //   if (result) {
    //     elementos.push(result.value)
    //     result.continue()
    //   }
    // }
    //indexe()