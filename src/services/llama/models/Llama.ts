import { LlamaColor } from './LlamaColor';

type Color = LlamaColor;

/**
 * A llama, with details of its name, age, color, and rating from 1 to 5.
 */
export interface Llama {
  /**
   * The name of the llama. This must be unique across all llamas.
   */
  name: string;
  /**
   * The age of the llama in years.
   */
  age: number;
  color: Color;
  /**
   * The rating of the llama from 1 to 5.
   */
  rating: number;
  /**
   * The ID of the llama.
   */
  id: number;
}
