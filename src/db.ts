import { Database } from 'sqlite3';
import fs from 'fs';

const db = new Database('db.sqlite');

const feed_database = ()=>{
    db.exec(fs.readFileSync(__dirname + '/sql/articles.sql').toString()); // Read and execute the SQL query in ./sql/articles.sql
    db.exec(fs.readFileSync(__dirname + '/sql/sample-articles.sql').toString()); // Insert the three example articles
}

export { feed_database }