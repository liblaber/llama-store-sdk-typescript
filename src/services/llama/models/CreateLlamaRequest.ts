import { LlamaColor } from './LlamaColor';


type Color = LlamaColor

/**
 * A new llama for the llama store.
 */
export interface CreateLlamaRequest {
/**
 * The name of the llama. This must be unique across all llamas.
 */
name: string
/**
 * The age of the llama in years.
 */
age: number
color: Color
/**
 * The rating of the llama from 1 to 5.
 */
rating: number
}
