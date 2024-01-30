import sql from "better-sqlite3"
const db=sql('meals.db')

export async function getMeal(){
    await new Promise((resolve)=>setTimeout(resolve,2000))
    return db.prepare('SELECT * FROM meals').all()
}


export async function getMeals(slug){
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}