//Imports
const express = require("express");
const NewsAPI = require("newsapi");
const dotenv = require("dotenv");
const { MongoClient, ServerApiVersion } = require('mongodb');

//Backend Config
const app = express();
const host = "127.0.0.1";
const public_host = "0.0.0.0";
const port = 4000;

//Env variables
dotenv.config();
const newsapi = new NewsAPI(process.env.NEWSAPIKEY);
const url = process.env.MONGODB_URI;

//For cross orgin requests and Enable CORS for all routes.
const cors = require("cors");
app.use(cors()); //use this for debuging

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

app.get("/api/news", (req, res) => {
  // You must include at least one q, source, or domain
  //   newsapi.v2
  //     .everything({
  //       //   q: "bitcoin",
  //       sources: "bbc-news,the-verge",
  //       domains: "bbc.co.uk, techcrunch.com",
  //       from: "2023-08-10",
  //       to: "2023-09-08",
  //       language: "en",
  //       sortBy: "relevancy",
  //       page: 1,
  //     })
  //     .then((response) => {

  //     var filter = response.articles.slice(0,5);
  //     res.send(filter);
  //     console.log(filter.length);
  //     });

  newsapi.v2
    .topHeadlines({
      sources: "the-verge,cnn,the-washington-post,tech-crunch",
      language: "en",
    })
    .then((response) => {
      let all_articles = response.articles;
      //for remvoing null articles
      for (every_article of all_articles) {
        if (
            every_article.author === null ||
            every_article.title === null ||
            every_article.description === null ||
            every_article.url === null ||
            every_article.urlToImage === null ||
            every_article.publishedAt === null ||
            every_article.content === null
        ) {
          all_articles.splice(all_articles.indexOf(every_article), 1); 
        }
      }

      res.send(all_articles);
    });
});

app.listen(port, host, () => {
  console.log("Server is now running on port", port);
});
