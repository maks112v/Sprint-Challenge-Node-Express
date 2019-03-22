const express = require('express');

const Projects = require('./projectModel');

const router = express.Router();


router.get('/', async (req, res) => {
  try{
    const projects = await Projects.get();
    res.status(200).json(projects);
  } catch (error){
    console.log(error);
    res.status(500).json({message: 'server error'})
  }
});

router.get('/:id', async (req, res) => {
  try{
    const projects = await Projects.get(req.params.id);
    res.status(200).json(projects);
  } catch (error){
    console.log(error);
    res.status(500).json({message: 'server error'})
  }
});

router.get('/:id/actions', async (req, res) => {
  try{
    const projectActions = await Projects.getProjectActions(req.params.id);
    res.status(200).json(projectActions);
  } catch (error){
    console.log(error);
    res.status(500).json({message: 'server error'})
  }
});

router.post('/', async (req, res) => {
  try{
    const project = await Projects.insert(req.body);
    res.status(201).json(project)
  } catch (error){
    console.log(error);
    res.status(500).json({message: 'server error'})
  }
});

router.put('/:id', async (req, res) => {
  try{
    const update = await Projects.update(req.params.id, req.body)
    res.status(200).json(update);
  } catch (error){
    console.log(error);
    res.status(500).json({message: 'server error'})
  }
});

router.delete('/:id', async (req, res) => {
  try{
    const removedProject = await Projects.remove(req.params.id);
    res.status(200).json(removedProject);
  } catch (error){
    console.log(error);
    res.status(500).json({message: 'server error'})
  }
});

module.exports = router;