const express = require('express');
const { addProject, getProjects, editProject, deleteProject } = require('../controllers/projectController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, addProject);
router.get('/', auth, getProjects);
router.put('/:id', auth, editProject);
router.delete('/:id', auth, deleteProject);

module.exports = router;
