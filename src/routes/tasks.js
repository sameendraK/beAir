const express = require('express')

const router = express.Router()

const { getTasks } = require('../controller/tasks.js')
const { createTask } = require('../controller/tasks.js')

router.get('/', getTasks)

router.get('/:id', (req, res) => {
    // Logic to get a task by ID
});

router.post('/create', createTask);

module.exports = router;