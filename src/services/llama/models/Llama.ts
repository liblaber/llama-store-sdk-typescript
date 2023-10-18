import { LlamaColor } from './LlamaColor';

type Color = LlamaColor;

/**
 * A llama, with details of its name, age, color, and rating from 1 to 5.
 */
export interface Llama {
  name: string;
  age: number;
  color: Color;
  rating: number;
  id: number;
}
