const { response, request } = require("express");
const usuariosGet = (req = request, res = response) => {
  const { ciudad, page = 1, limit = 10 } = req.query;
  res.json({
    msg: "get api",
    ciudad,
    page,
    limit,
  });
};

const usuariosPut = (req, res) => {
  const { id } = req.params;
  res.json({
    msg: "put api",
    id,
  });
};
const usuariosPost = (req, res) => {
  const { name } = req.body;

  res.json({
    msg: "post api",
    name,
  });
};
const usuariosDelete = (req, res) => {
  res.json({
    msg: "delete api",
  });
};
module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
};
