const NewsAPI = require("newsapi");
const dotenv = require("dotenv");
const axios = require("axios");
const { MongoClient, ServerApiVersion } = require("mongodb");

//Env variables
dotenv.config();
const newsapi = new NewsAPI(process.env.NEWSAPIKEY);
const url = process.env.MONGODB_URI;
const weather_service_api = process.env.WEATHERAPI;

let script = async () => {
    const DATABASE_NAME = "News";
    const COLLECTION_NAME = "top-news";
    try {
      // Fetch articles from the news API
      const response = await newsapi.v2.topHeadlines({
        sources: "the-verge,cnn,the-washington-post,tech-crunch",
        language: "en",
      });
  
      let all_articles = response.articles;
  
      // Remove null articles
      all_articles = all_articles.filter(
        (every_article) =>
          every_article.author &&
          every_article.title &&
          every_article.description &&
          every_article.url &&
          every_article.urlToImage &&
          every_article.publishedAt &&
          every_article.content
      );
  
      const client = new MongoClient(url, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        },
      });
  
      await client.connect();
  
      const db = client.db(DATABASE_NAME);
      const collection = db.collection(COLLECTION_NAME);
  
      // Clear the collection for fresh data
      await collection.deleteMany({});
  
      // Insert the fetched articles into the MongoDB collection
      await collection.insertMany(all_articles);
      await client.close();
  
      console.log("Articles inserted successfully!");
    } catch (error) {
      if (error instanceof MongoClientError) {
        await client.close();
      }
      console.log(error.message);
    }
  };