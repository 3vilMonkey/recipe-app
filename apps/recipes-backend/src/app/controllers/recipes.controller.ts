import { Router } from 'express';
import { TEST_RECIPES } from '../services/mock-recipes';
import { RecipeSearchService } from '../services/recipe-search.service';
import { RecipesService } from '../services/recipes.service';

const recipesService = new RecipesService();
const recipeSearchService = new RecipeSearchService();
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

// Search recipes
router.post('/search', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const filteredRecipes = await recipeSearchService.searchRecipes(
      prompt,
      TEST_RECIPES,
    );
    res.json(filteredRecipes);
  } catch (error) {
    console.error('Error filtering recipes:', error);
    res.status(500).json({ error: 'Failed to filter recipes' });
  }
});

export default router;
