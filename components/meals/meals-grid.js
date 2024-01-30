import classes from "./meals-grid.module.css";
import MealItem from "./meal-item";
export default function MealGrid({ meals }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />

          {/*
to pull out all then properties of the meal object */}
        </li>
      ))}
    </ul>
  );
}
