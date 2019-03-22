const express = require('express');

const Actions = require('./actionModel.js');

const router = express.Router();


router.get('/', async (req, res) => {
  try{
    const actions = await Actions.get();
    res.status(200).json(actions);
  } catch (error){
    console.log(error);
    res.status(500).json({message: 'server error'})
  }
});

router.get('/:id', async (req, res) => {
  try{
    const action = await Actions.get(req.params.id);
    res.status(200).json(action);
  } catch (error){
    console.log(error);
    res.status(500).json({message: 'server error'})
  }
});

router.post('/', async (req, res) => {
  try{
    const action = await Actions.insert(req.body);
    res.status(201).json(action);
  } catch (error){
    console.log(error);
    res.status(500).json({message: 'server error'})
  }
});

router.put('/:id', async (req, res) => {
  try{
    const update = await Actions.update(req.params.id, req.body)
    res.status(200).json(update);
  } catch (error){
    console.log(error);
    res.status(500).json({message: 'server error'})
  }
});

router.delete('/:id', async (req, res) => {
  try{
    const removedAction = await Actions.remove(req.params.id);
    res.status(200).json(removedAction);
  } catch (error){
    console.log(error);
    res.status(500).json({message: 'server error'})
  }
});

module.exports = router;