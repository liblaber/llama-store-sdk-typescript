

/**
 * A request to get an API token for a given user.
 */
export interface CreateApiTokenRequest {
/**
 * The email address of the user. This must be unique across all users.
 */
email: string
/**
 * The password of the user. This must be at least 8 characters long, and contain at least one letter, one number, and one special character.
 */
password: string
}
