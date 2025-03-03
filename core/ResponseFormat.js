/*
 *Response format
 *@statusCode:
 *200 -> Exito
 *400 -> Error de consulta
 *@statusType:
 *success -> Exito
 *error -> Error de consulta
 *question -> Pregunta por confirmar
 */
const ResponseFormat = {
  build: (object, message, statusCode, statusType) => {
    return {
      rows : object,
      statusCode: statusCode,
      message: message,
      statusType: statusType
    };
  },
  error: (object, message, statusCode, statusType) => {
    return {
      error: object,
      statusCode: statusCode,
      message: message,
      statusType: statusType
    };
  }
};

module.exports = ResponseFormat;
