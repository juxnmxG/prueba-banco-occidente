"use strict";

const { allSizes } = require("./services/transport.service");
const getResponse = (statusCode, result) => {
  return {
    statusCode,
    body: JSON.stringify(result, null, 2),
  };
};
module.exports.getSizes = async (event) => {
  try {
    const sizes = allSizes(JSON.parse(event.body).groups);
    return getResponse(200, { sizes });
  } catch (error) {
    return getResponse(400, { error: error.message });
  }
};
