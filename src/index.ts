import { LlamaService } from './services/llama/Llama';
import { LlamaPictureService } from './services/llamaPicture/LlamaPicture';
import { TokenService } from './services/token/Token';
import { UserService } from './services/user/User';

export * from './models';



export * as LlamaModels from './services/llama'
export * as LlamaPictureModels from './services/llamaPicture'
export * as TokenModels from './services/token'
export * as UserModels from './services/user'

type Config = {
accessToken?: string;
}

export * from './http/errors';

/**
 * The llama store API! Get details on all your favorite llamas.  ## To use this API  - You will need to register a user, once done you can request an API token. - You can then use your API token to get details about the llamas.  ## User registration  To register a user, send a POST request to `/user` with the following body:      ```json {      email :  <your email> ,      password :  <your password>  } ``` This API has a maximum of 1000 current users. Once this is exceeded, older users will be deleted. If your user is deleted, you will need to register again. ## Get an API token  To get an API token, send a POST request to `/token` with the following body:      ```json {      email :  <your email> ,      password :  <your password>  } ```  This will return a token that you can use to authenticate with the API:  ```json {    access_token :  <your new token> ,    token_type :  bearer  } ```  ## Use the API token  To use the API token, add it to the `Authorization` header of your request:  ``` Authorization: Bearer <your token> ```   
 */
export class Llamastore {
  public llama:LlamaService;
public llamaPicture:LlamaPictureService;
public token:TokenService;
public user:UserService;

  constructor({accessToken = ''}: Config) {
this.llama = new LlamaService(accessToken);
this.llamaPicture = new LlamaPictureService(accessToken);
this.token = new TokenService(accessToken);
this.user = new UserService(accessToken);
}

  /**
 * Sets the baseUrl that the SDK will use for its requests. 
 * @param {string} url
 */
setBaseUrl(url: string): void {
this.llama.setBaseUrl(url);
this.llamaPicture.setBaseUrl(url);
this.token.setBaseUrl(url);
this.user.setBaseUrl(url);
}


/**
 * Sets the access token used to authenticate.
 * @param {string} accessToken
 */
setAccessToken(accessToken: string) {
this.llama.setAccessToken(accessToken);
this.llamaPicture.setAccessToken(accessToken);
this.token.setAccessToken(accessToken);
this.user.setAccessToken(accessToken);
}

}


export default Llamastore;


// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c
