/**
 * A user of the llama store
 */
export interface User {
  /**
   * The email address of the user. This must be unique across all users.
   */
  email: string;
  /**
   * The ID of the user. This is unique across all users.
   */
  id: number;
}
