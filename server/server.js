const express = require("express");
const compression = require("compression");
const dotenv = require("dotenv");
const axios = require("axios");
const { MongoClient, ServerApiVersion } = require("mongodb");
const rateLimit = require("express-rate-limit");
const cors = require("cors");

dotenv.config();

// Configuration
const HOST = "127.0.0.1";
const PORT = 4000;
const MONGODB_URI = process.env.MONGODB_URI;
const WEATHER_API_KEY = process.env.WEATHERAPI;

const ALLOWED_ORIGINS = [
  "https://www.thereactpost.xyz",
  "https://thereactpost.xyz",
];

// Initialize Express app
const app = express();

// CORS Configuration
app.use(
  cors({
    origin: (origin, callback) => {
      if (ALLOWED_ORIGINS.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.use(compression());
app.use(express.json());


// Rate Limiting Middleware
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests from this IP, please try again later.",
  })
);

// Routes
app.post("/api/weather", async (req, res) => {
  const { ip } = req.body;
  if (!ip) return res.status(400).json({ error: "IP address is required" });

  try {
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${ip}`);
    const data = response.data;

    return res.json({
      country: data.location.country,
      city: data.location.name,
      temperatureInC: data.current.temp_c,
      conditionText: data.current.condition.text,
      icon: data.current.condition.icon,
    });
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    return res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

app.get("/api/test", (req, res) => res.send(`Server is running on ${HOST}:${PORT}`));

app.get("/api/mongo-test", async (req, res) => {
  const client = new MongoClient(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    serverApi: ServerApiVersion.v1,
  });

  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    res.send("MongoDB connection successful!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    res.status(500).send("Error connecting to MongoDB");
  } finally {
    await client.close();
  }
});

app.get("/api/top-headlines", async (req, res) => {
  const DATABASE_NAME = "News";
  const COLLECTION_NAME = "top-news";
  const client = new MongoClient(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    serverApi: ServerApiVersion.v1,
  });

  try {
    await client.connect();
    const articles = await client.db(DATABASE_NAME).collection(COLLECTION_NAME).find().limit(10).toArray();
    return res.json(articles);
  } catch (error) {
    console.error("Error fetching top headlines:", error);
    return res.status(500).send("Error fetching top headlines");
  } finally {
    await client.close();
  }
});

app.listen(PORT, HOST, () => console.log(`Server started on ${HOST}:${PORT}`));
