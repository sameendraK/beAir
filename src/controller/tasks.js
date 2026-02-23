const tasks = [
    {
        id: 1,
        title: "get up project structure",
        description: "Initialize project and install necessary packages",
        completed: true
    },
    {
        id: 2,
        title: "Create RESTful endpoints",
        description: "Implement CRUD operations for tasks",
        completed: false
    },
    {
        id: 3,
        title: "Test API endpoints",
        description: "Use Postman to test the API functionality",
        completed: false
    }
];

const getTasks = (req, res) => {
    res.json(tasks)
}

const createTask = (req, res) => {
    console.log('req.body (raw):', req.body);
    console.log('req.body (stringified):', JSON.stringify(req.body));
    console.log('req.body keys:', Object.keys(req.body));

    // If you ever see `[Object: null prototype] {}` you can normalise it:
    const body = Object.assign({}, req.body); // converts null-prototype -> normal object

    const { title, description } = body;
    if (!title || !description) {
        return res.status(400).json({ message: 'title and description are required' });
    }

    const newTask = {
        id: tasks.length + 1,
        title,
        description,
        completed: false
    };

    tasks.push(newTask);

    // Return the created resource
    return res.status(201).json(newTask);
}

module.exports = { getTasks, createTask }