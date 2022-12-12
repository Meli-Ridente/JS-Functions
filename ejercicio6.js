/* Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar 
un array sin los elementos duplicados. Puedes usar este array para probar tu función: */

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];


    function removeDuplicates(param) {
      //var cantidad = [];
      for (let i=0; i<param.length; i++){
        let cont = 0;
        for (let j=0; j<param.length; j++){ 
          if(param[i] == param[j]){
            cont++;
            if(cont>1){
              param.splice(i,1)
            }
          }
        } 
      }
      return param;
    }


console.log(removeDuplicates(duplicates))
