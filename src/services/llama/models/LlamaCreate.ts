import { LlamaColor } from './LlamaColor';

type Color = LlamaColor;

/**
 * A new llama for the llama store.
 */
export interface LlamaCreate {
  name: string;
  age: number;
  color: Color;
  rating: number;
}
