import { object, string, number } from "yup";

let restaurantFilter = object({
  restaurantTitle: string().required(),
  restaurantPrice: number().required(),
  restaurantStars: number().min(1).max(5).required(),
  persons: number().min(1).required(),
  restaurantEmptyDate: string().required(),
  restaurantEmptyTime: string().required()
});

export default restaurantFilter;
