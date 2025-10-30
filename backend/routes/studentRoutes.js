import express from "express";
import Student from "../models/Student.js";
const router = express.Router();

// Create Student
router.post("/", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Students
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

export default router;