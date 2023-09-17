//Imports
const express = require("express");
const compression = require("compression");
const NewsAPI = require("newsapi");
const dotenv = require("dotenv");
const axios = require("axios");
const { MongoClient, ServerApiVersion } = require("mongodb");
const rateLimit = require("express-rate-limit"); // for dos rate limit

//Backend Config
const app = express();
app.use(compression()); // Use compression middleware before all your other routes/middlewares
const host = "127.0.0.1";
const public_host = "0.0.0.0";
const port = 4000;

//Env variables
dotenv.config();
const newsapi = new NewsAPI(process.env.NEWSAPIKEY);
const url = process.env.MONGODB_URI;
const weather_service_api = process.env.WEATHERAPI;

//For cross orgin requests and Enable CORS for all routes.
const cors = require("cors");
app.use(cors()); //use this for debuging

// Allow requests only from origins
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

// Custom error handler for CORS errors
// app.use((err, req, res, next) => {
//   if (err.message === "Not allowed by CORS") {
//     res.status(403).send("CORS Error: Not allowed by CORS");
//   } else {
//     next(err);
//   }
// });

app.use(express.json()); // This is essential to parse incoming JSON payloads

// Implement rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 10 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});

app.use(limiter);

app.post("/api/weather", async (req, res) => {
  const ipAddress = req.body.ip;

  if (!ipAddress) {
    return res.status(400).json({ error: "IP address is required" });
  }

  try {
    // Fetch weather data using the weather API and the provided IP address
    const weatherApiResponse = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${weather_service_api}&q=${ipAddress}`
    );

    const data = weatherApiResponse.data;

    const result = {
      country: data.location.country,
      city: data.location.name,
      temperatureInC: data.current.temp_c,
      conditionText: data.current.condition.text,
      icon: data.current.condition.icon,
    };

    res.json(result);
    console.log("Weather Data Sent");
  } catch (error) {
    console.error("Error fetching weather data: ", error.message);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

app.get("/api/test", (req, res) => {
  res.send(`Server is running on ${host} at ${port}`);
});

app.get("/api/mongo-test", (req, res) => {
  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(url, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 2 });
      console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
      );
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);

  res.send("Check console");
});

app.get("/api/top-headlines", async (req, res) => {
  const DATABASE_NAME = "News";
  const COLLECTION_NAME = "top-news";

  const client = new MongoClient(url, {
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
    console.log("db working");
  } catch (error) {
    res.status(500).send("Error occurred: " + error.message);
  } finally {
    await client.close();
  }
});

app.listen(port, public_host, () => {
  console.log("Server is now running on port", port);
});
