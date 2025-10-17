import express from "express";
import feedStore from "../modules/feedStore";

const router = express.Router();

router.get("/getFeed", (req, res) => {
  try {
    const requestCount = parseInt(req.query.count as string, 10);
    const storeRes = feedStore.selectItems(requestCount);
    if (storeRes.success) {
      res.json(storeRes.data.map(({ id, ...item}) => ({
        ...item,
        id: id.toString(),
      })));
    } else {
      res.status(400).json(storeRes.data);
    }
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.post("/addFeed", (req, res) => {
  try {
    const { title, content } = req.body;
    const storeRes = feedStore.insertItem({ title, content });
    if (storeRes) {
      res.json({ isOK: true });
    } else {
      res.status(500).json({ isOK: false });
    }
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.post("/deleteFeed", (req, res) => {
  try {
    const { id } = req.body;
    const storeRes = feedStore.deleteItem(parseInt(id as string, 10));
    if (storeRes) {
      res.json({ isOK: true });
    } else {
      res.status(500).json({ isOK: false });
    }
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.post("/editFeed", (req, res) => {
  try {
    const { id, newTitle, newContent } = req.body as {
      id: string; newTitle: string; newContent: string;
    };
    const parsedId = parseInt(id, 10);
    if (Number.isNaN(parsedId)) {
      return res.status(400).json({ error: "Invalid id" });
    }
    const result = feedStore.updateItem(parsedId, newTitle, newContent);
    if (result.success) {
      const { id: numId, ...rest } = result.data;
       return res.json({ success: true, feed: { ...rest, id: numId.toString() } });
      }
      return res.status(404).json({ success: false, error: result.data });
    } catch (e) {
      res.status(500).json({ error: e });
    }})


export default router;
