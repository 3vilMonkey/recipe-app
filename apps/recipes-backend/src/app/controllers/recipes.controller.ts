import { Router } from 'express';
import { RecipesService } from '../services/recipes.service';

const recipesService = new RecipesService();
const router = Router();

// Get all recipes
router.get('/', (req, res) => {
  const recipes = recipesService.getAllRecipes();
  res.json(recipes);
});

// Get a single recipe by ID
router.get('/:id', (req, res) => {
  const recipe = recipesService.getRecipeById(req.params.id);
  if (!recipe) {
    res.status(404).json({ error: 'Recipe not found' });
  } else {
    res.json(recipe);
  }
});

export default router;
