const UserModel = require('../../db').User

module.exports = {
  get: async () => {
    return UserModel.find(function(err, users) {
      if (err) return console.error(err)
      return users
    })
  },

  set: async data => {
    user = new UserModel({
      nome: data.nome,
      email: data.email
    })
    user.save((err, user) => {
      if (err) {
        return next(err)
      }
      return user
    })
  },

  update: async data => {
    return UserModel.update(
      { _id: data.id },
      { nome: data.nome, email: data.email }
    ).then(res => {
      return { res: res.n }
    })
  },

  delete: async data => {
    return UserModel.deleteOne({ _id: data }).then(res => {
      return { res: res.n }
    })
  }
}
