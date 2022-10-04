const Info = require("../models/info");

class InfoController {
  async getAll(_, res) {
    const infos = await Info.findAll({
      where: {
        active: 1
      }
    });
    return res.status(200).json(infos);
  }

  async update(req, res) {
    const {id, name, description, obs, language, size, domain, actualLocation, x_mouse, y_mouse} = req.body;
    const info = await Info.findOne({
      where: {
        id
      }
    })
    info.update({
      name,
      description,
      obs,
      language,
      size,
      domain,
      actualLocation,
      x_mouse,
      y_mouse
    })
    info.save();
    return res.status(200).json(info);
  }

  async save(req, res) {
    const {name, description, obs, language, size, domain, actualLocation, x_mouse, y_mouse} = req.body;
    const newInfo = await Info.create({
      name,
      description,
      obs,
      language,
      size,
      domain,
      actualLocation,
      x_mouse,
      y_mouse
    })
    return res.status(200).json(newInfo);
  }

  async delete(req, res) {
    const { id } = req.params;
    const info = await Info.findOne({
      where: {
        id
      }
    })
    info.update({
      active: 0
    })    
    info.save();
    return res.status(200).send("Remoção concluída com sucesso!")
  }
}

module.exports = new InfoController();