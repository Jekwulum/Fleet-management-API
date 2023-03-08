const errorCodes = require("../../enums/errorcodes.enums");

const databaseError = error => {
  const message = ("errors" in error) ? error['errors'][Object.keys(error['errors'])[0]]['message'] : "FAILURE, Invalid Params or Server Error";
  return { status: errorCodes.Error500.code, type: errorCodes.Error500.type, message };
}

module.exports = { databaseError };
