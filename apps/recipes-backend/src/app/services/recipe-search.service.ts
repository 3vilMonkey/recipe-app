import { PromptTemplate } from '@langchain/core/prompts';
import { ChatOllama } from '@langchain/ollama';
import { ChatOpenAI } from '@langchain/openai';
import { Recipe, ZodRecipeArray } from '../models/recipe.model';

export class RecipeSearchService {
  private ollama: ChatOllama;
  private llm: ChatOpenAI;

  constructor() {
    // Initialize the Ollama client with the gemma2 model
    this.ollama = new ChatOllama({
      model: 'llama3.2',
      temperature: 0,
      format: 'json',
    });
    this.llm = new ChatOpenAI({
      model: 'llama3.2',
      configuration: {
        baseURL: 'http://localhost:11434/v1/',
        apiKey: 'ollama',
      },
    });
  }

  /**
   * Search recipes based on the given prompt.
   * @param prompt The user-provided prompt.
   * @param recipes The list of available recipes.
   * @returns A list of recipes.
   */
  async searchRecipes(prompt: string, recipes: Recipe[]): Promise<Recipe[]> {
    // Prepare the context for the model
    const context = `
      You are a recipe assistant. The user provides a prompt, and you filter recipes from the provided list.
      Recipes are provided in JSON format. Only return the filtered recipes as a JSON array.\n\n
      Recipes: {recipes} \n\n
      Prompt: {prompt}
    `;

    // Combine the context and user prompt
    const input = `\n\nRecipes: ${JSON.stringify(recipes)}\n\nPrompt: ${prompt}`;
    // const structuredLlm = this.llm.withStructuredOutput(ZodRecipeArray);
    const structuredLlm = this.ollama.withStructuredOutput(ZodRecipeArray);

    const promptTemplate = PromptTemplate.fromTemplate(context);

    const chain = promptTemplate.pipe(structuredLlm);

    // Query the Ollama model
    const response = await chain.invoke({ prompt, recipes });

    // Parse the response and return the filtered recipes
    try {
      return response;
    } catch (error) {
      console.error('Failed to parse Ollama response:', error);
      return [];
    }
  }
}
