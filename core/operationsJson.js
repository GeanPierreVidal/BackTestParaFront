const operationsJson = {
    //Descripcion: Valida si es Json
    //Parametros @str: cadena u objeto json
    isJson: (str)=>{
      try {
        JSON.parse(str);
      } catch (e) {
          return false;
      }

      return true;
    } 
}
  
module.exports = operationsJson