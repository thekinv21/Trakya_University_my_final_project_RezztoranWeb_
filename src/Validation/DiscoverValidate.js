import { object, string, number } from "yup";

let restaurantFilter = object({
  restaurantTitle: string().required(),
  restaurantPrice: number().required(),
  restaurantStars: number().min(1).max(5).required(),
});

export default restaurantFilter;
