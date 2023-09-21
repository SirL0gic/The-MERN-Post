const NewsAPI = require("newsapi");
const dotenv = require("dotenv");
const sqlite3 = require('sqlite3').verbose();

// Env variables
dotenv.config();
const newsapi = new NewsAPI(process.env.NEWSAPIKEY);
const dbPath = "./newsDatabase.db"; // SQLite database file

// ... [other imports and setup]

let script = async () => {
    try {
        const response = await newsapi.v2.topHeadlines({
            sources: "the-verge,cnn,the-washington-post,tech-crunch",
            language: "en",
        });

        let all_articles = response.articles;
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

        let db = new sqlite3.Database(dbPath);

        db.serialize(() => {  // Use serialize to run SQLite commands in series
            // Create table if it doesn't exist
            db.run(`CREATE TABLE IF NOT EXISTS top_news (
                _id TEXT PRIMARY KEY,
                source_id TEXT,
                source_name TEXT,
                author TEXT,
                title TEXT,
                description TEXT,
                url TEXT,
                urlToImage TEXT,
                publishedAt TEXT,
                content TEXT
            )`);

            // Clear existing data
            db.run("DELETE FROM top_news");

            // Insert articles into SQLite
            let stmt = db.prepare("INSERT INTO top_news VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
            for (let article of all_articles) {
                stmt.run(article._id, article.source.id, article.source.name, article.author, article.title, article.description, article.url, article.urlToImage, article.publishedAt, article.content);
            }
            stmt.finalize(() => {
                db.close();
                console.log("Articles inserted successfully!");
            });
        });
    } catch (error) {
        console.log(error.message);
    }
};

script();
