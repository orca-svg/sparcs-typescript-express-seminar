import express from "express";
import authMiddleware from "../middlewares/auth";
import bankStore from "../modules/bankStore";

const router = express.Router();

// 또는
// router.use(authMiddleware);

router.post("/getInfo", authMiddleware, (req, res) => {
  try {
    const { success, data } = bankStore.getBalance();
    if (success) {
      res.json({ success: true, balance: data });
    } else {
      res.status(500).json({ success: false });
    }
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.post("/transaction", authMiddleware, (req, res) => {
  try {
    const { amount } = req.body;
    const { success, data } = bankStore.transaction(parseInt(amount as string, 10));
    if (success) {
      res.json({ success: true, balance: data });
    } else {
      res.status(500).json({ success: false });
    }
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

export default router;
