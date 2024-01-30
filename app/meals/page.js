import Link from "next/link"
import classes from "./page.module.css"
import MealGrid from "@/components/meals/meals-grid"
import { getMeal } from "@/lib/meals"
import { Suspense } from "react"

async function Meals(){
    const meals=await getMeal();
    {/* <MealGrid meals={[]}/>     */}   
{/* intead we can give like this */}

{/* now we have no meals yet */}
return   <MealGrid meals={meals}/>     

}

export default  async function MealsPage(){
    return(
        <>
        <header className={classes.header}>
            <h1>Delicios,created {' '} <span className={classes.highlight}>by you</span></h1>
            <p>Choose your favorite reciepe and Cook yourself. it is easy and fun </p>
            <p className={classes.cta}>

                <Link href="/meals/share">
                    Share your favourite meals
                </Link>
            </p>
        </header>
        <main  className={classes.main}> 
{/* //loading  */}
<Suspense fallback={
 <p className={classes.loading}>Featching page...</p> 
}>
<Meals/>
</Suspense>


        </main>
        </>
    )
}