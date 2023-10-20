router.post('/create', async (req, res) => {
    try {
        const task = await Task.create({
            name: req.body.name,
            status: req.body.status,
            priority: req.body.priority,
            userId: req.body.userId  // assuming you're passing userId for now
        });
        res.status(201).json({ message: "Task created!", taskId: task.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/list/:userId', async (req, res) => {
    const tasks = await Task.findAll({ where: { userId: req.params.userId } });
    res.json(tasks);
});

router.put('/update/:taskId', async (req, res) => {
    try {
        await Task.update(req.body, { where: { id: req.params.taskId } });
        res.json({ message: "Task updated!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
