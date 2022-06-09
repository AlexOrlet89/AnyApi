const { Router } = require('express');
const app = require('../app');
const Friend = require('../models/friend');

app.get;

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const friend = await Friend.getByID(id);
    res.json(friend);
  })
  .get('/', async (req, res) => {
    const friendsArray = await Friend.getAll();
    res.json(friendsArray);
  });
