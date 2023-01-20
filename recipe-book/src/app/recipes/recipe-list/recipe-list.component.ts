import { Component, EventEmitter, Output } from '@angular/core';
import Recipe from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://lobsterfrommaine.com/wp-content/uploads/2022/05/20210503-MLMC-Spring-Radish-Pea-Lobster-Salad-Labneh2883-scaled.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://lobsterfrommaine.com/wp-content/uploads/2022/05/20210503-MLMC-Spring-Radish-Pea-Lobster-Salad-Labneh2883-scaled.jpg'
    )
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
