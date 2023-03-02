import { Router } from 'express';
import { Database } from 'sqlite3';

const db = new Database('db.sqlite');

export const article = Router();

const all_articles= `SELECT * FROM articles ORDER BY LENGTH(description) DESC`;
const update_article = `UPDATE articles SET title=? WHERE id=?`;
const delete_article = `DELETE FROM articles WHERE id=?`;

article.get('/articles', async (request, response) => {
    let success = false;
    let data;   
    async function query_all_articles(){
        return new Promise((resolve, reject) =>{
            db.all(all_articles, (err, rows) => {
                if(err){
                    return reject(err);
                }
                resolve(rows);
            });
        }) 
    }
    try{
        let articles = await query_all_articles();
        success= true;
        data= articles;
    }catch(Err){
        success= false;
        data= 'An Error Happened';
    }
    response.json({success: success,message: data});
});

  
  