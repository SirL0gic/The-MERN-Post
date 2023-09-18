const express = require("express");
const compression = require("compression");
const dotenv = require("dotenv");
const axios = require("axios");
const { MongoClient, ServerApiVersion } = require("mongodb");
const rateLimit = require("express-rate-limit");
// const cors = require("cors");

dotenv.config();

// Configuration
const HOST = "127.0.0.1";
const PORT = 4000;
const MONGODB_URI = process.env.MONGODB_URI;
const WEATHER_API_KEY = process.env.WEATHERAPI;


// Initialize Express app
const app = express();

// app.use((req, res, next) => {
//   console.log("Received headers:", req.headers);
//   next();
// });

// CORS Configuration
// app.use((req, res, next) => {
//   const allowedOrigins = ["https://www.thereactpost.xyz", "https://thereactpost.xyz"];
//   const origin = req.headers.origin;

//   if (allowedOrigins.includes(origin)) {
//       res.header("Access-Control-Allow-Origin", origin);
//       res.header("Access-Control-Allow-Methods", "GET,POST");
//       res.header("Access-Control-Allow-Headers", "Content-Type");
//       next();
//   } else {
//     return res.status(403).send(`Unauthorized origin: ${origin}`);

//   }
// });

// app.use(cors());
// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (origin === "https://www.thereactpost.xyz" || origin === "https://thereactpost.xyz") {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//   })
// );

//Custom error handler for CORS errors
// app.use((err, req, res, next) => {
//   if (err.message === "Not allowed by CORS") {
//     res.status(403).send("CORS Error: Not allowed by CORS");
//   } else {
//     next(err);
//   }
// });

app.use(compression());
app.use(express.json());


// Rate Limiting Middleware
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 50,
    message: "Too many requests from this IP, please try again later.",
  })
);

// Routes
app.post("/api/weather", async (req, res) => {
  const { ip } = req.body;
  if (!ip) return res.status(400).json({ error: "IP address is required" });

  try {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${ip}`
    );
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

app.get("/api/test", (req, res) =>
  res.send(`Server is running on ${HOST}:${PORT}`)
);

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
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    await client.connect();

    const db = client.db(DATABASE_NAME);
    const collection = db.collection(COLLECTION_NAME);

    const articles = await collection.find().toArray();

    res.status(200).send(articles.slice(0, 10));
    console.log("News Data Sent");
  } catch (error) {
    res.status(500).send("Error occurred: " + error.message);
  } finally {
    await client.close();
  }
});

app.listen(PORT, HOST, () => console.log(`Server started on ${HOST}:${PORT}`));