import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 4000;
connectDB();

const allowedOrigins = ["https://category-management-prkjad3qm-puneeth-kumar-nls-projects.vercel.app/"];

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: allowedOrigins, // Allow only this origin
    credentials: true, // If you need to send cookies
  })
);

// API Endpoints
app.get("/", (req, res) => res.send("API Working"));
const category = [
  {
    categoryId: 1,
    categoryImage:
      "https://res.cloudinary.com/dszd8jabc/image/upload/v1744402623/pexels-photo-842811_kuzlde.jpg",
    categoryName: "Men Cloths",
    itemCount: 24,
  },
  {
    categoryId: 2,
    categoryImage:
      "https://res.cloudinary.com/dszd8jabc/image/upload/v1744402622/pexels-photo-7943240_nqvjhp.webp",
    categoryName: "Women Clothes",
    itemCount: 13,
  },
  {
    categoryId: 3,
    categoryImage:
      "https://res.cloudinary.com/dszd8jabc/image/upload/v1744402622/pexels-photo-322207_dzkitb.jpg",
    categoryName: "Accessories",
    itemCount: 43,
  },
  {
    categoryId: 4,
    categoryImage:
      "https://res.cloudinary.com/dszd8jabc/image/upload/v1744402622/istockphoto-1345934516-2048x2048_ivszam.jpg",
    categoryName: "Cotton Cloths",
    itemCount: 31,
  },
  {
    categoryId: 5,
    categoryImage:
      "https://res.cloudinary.com/dszd8jabc/image/upload/v1744402622/free-photo-of-couple-holding-hands-on-a-beach_hjpfte.jpg",
    categoryName: "Summer Clothes",
    itemCount: 26,
  },
  {
    categoryId: 6,
    categoryImage:
      "https://res.cloudinary.com/dszd8jabc/image/upload/v1744402623/pexels-photo-3367387_hdupad.webp",
    categoryName: "Wedding Clothes",
    itemCount: 52,
  },
  {
    categoryId: 7,
    categoryImage:
      "https://res.cloudinary.com/dszd8jabc/image/upload/v1744402623/pexels-photo-9775856_jcoszy.webp",
    categoryName: "Spring Collection",
    itemCount: 24,
  },
  {
    categoryId: 8,
    categoryImage:
      "https://res.cloudinary.com/dszd8jabc/image/upload/v1744402623/pexels-photo-2422290_pevc20.jpg",
    categoryName: "Casual Clothes",
    itemCount: 52,
  },
  {
    categoryId: 9,
    categoryImage:
      "https://res.cloudinary.com/dszd8jabc/image/upload/v1744402624/pexels-photo-1751150_hv6ehb.jpg",
    categoryName: "Hats",
    itemCount: 48,
  },
];

app.get("/api/categories", (req, res) => {
  res.json(category);
});

app.use(express.json()); // Middleware to parse JSON requests

app.post("/api/categories", (req, res) => {
  const { categoryData } = req.body;

  if (!categoryData) {
    return res.status(400).json({ error: "categoryData is required" });
  }

  category.push(categoryData);
  res.status(200).json({
    message: "Category data added successfully",
    categoryData,
  });
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.listen(port, () => console.log(`Server started on PORT:${port}`));
