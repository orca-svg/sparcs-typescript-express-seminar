import express from "express";
const router = express.Router();

type Todo = { id: string; task: string; done: boolean };
let todos: Todo[] = [
  { id: "1", task: "Study Express", done: false },
  { id: "2", task: "Do Assignment", done: true },
];

router.post("/", (req, res) => {
  const { id, task } = req.body as { id: string; task: string };
  if (!id || !task) return res.status(400).json({ error: "id and task required" });
  todos.push({ id, task, done: false });
  res.json({ success: true, todos });
});

router.get("/", (_req, res) => res.json({ todos }));

router.put("/:id", (req, res) => {
  const t = todos.find((x) => x.id === req.params.id);
  if (!t) return res.status(404).json({ error: "Not found" });
  t.done = !t.done;
  res.json({ success: true, todo: t });
});

router.delete("/:id", (req, res) => {
  const sizeBefore = todos.length;
  todos = todos.filter((x) => x.id !== req.params.id);
  if (todos.length === sizeBefore) return res.status(404).json({ error: "Not found" });
  res.json({ success: true, todos });
});

export default router;