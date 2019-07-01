const userService = require('../services/user.service')
module.exports = app => {
  app.get('/user', async (req, res) => {
    res.send(await userService.get())
  })
  app.post('/user', async (req, res) => {
    res.send(await userService.set(req.body))
  })
  app.put('/user/', async (req, res) => {
    res.send(await userService.update(req.body))
  })
  app.delete('/user/:id', async (req, res) => {
    res.send(await userService.delete(req.params.id))
  })
}
