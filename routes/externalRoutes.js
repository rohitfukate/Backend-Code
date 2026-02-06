import express from "express";
import axios from "axios";

const router = express.Router();

// GET Random Quote from third-party API
router.get("/quote", async (req, res) => {
  try {
    const response = await axios.get("https://api.quotable.io/random");
    res.json({
      success: true,
      data: response.data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch external data",
      error: error.message,
    });
  }
});

export default router;
