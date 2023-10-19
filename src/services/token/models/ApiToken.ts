/**
 * An API token to use for authentication.
 */
export interface ApiToken {
  /**
   * The bearer token to use with the API. Pass this in the Authorization header as a bearer token.
   */
  access_token: string;
  /**
   * The type of token. This will always be bearer.
   */
  token_type?: string;
}
