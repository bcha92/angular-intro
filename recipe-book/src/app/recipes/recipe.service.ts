import { EventEmitter, Injectable } from "@angular/core";
import Recipe from "./recipe.model";
import Ingredient from "../shared/ingredient.model";
import ShoppingListService from "../shopping-list/shopping-list.service";

@Injectable()
export default class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is simply a test',
            'https://lobsterfrommaine.com/wp-content/uploads/2022/05/20210503-MLMC-Spring-Radish-Pea-Lobster-Salad-Labneh2883-scaled.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]
        ),
        new Recipe(
            'A Test Recipe',
            'This is simply a test',
            'https://lobsterfrommaine.com/wp-content/uploads/2022/05/20210503-MLMC-Spring-Radish-Pea-Lobster-Salad-Labneh2883-scaled.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]
        )
    ];

    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}