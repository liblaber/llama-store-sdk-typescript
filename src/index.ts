import { LlamaService } from './services/llama/Llama';
import { LlamaPictureService } from './services/llamaPicture/LlamaPicture';
import { TokenService } from './services/token/Token';
import { UserService } from './services/user/User';

export * from './models';

export * as LlamaModels from './services/llama';
export * as LlamaPictureModels from './services/llamaPicture';
export * as TokenModels from './services/token';
export * as UserModels from './services/user';

type Config = {
  accessToken?: string;
};

export * from './http/errors';

export class Llamastore {
  public llama: LlamaService;
  public llamaPicture: LlamaPictureService;
  public token: TokenService;
  public user: UserService;

  constructor({ accessToken = '' }: Config) {
    this.llama = new LlamaService(accessToken);
    this.llamaPicture = new LlamaPictureService(accessToken);
    this.token = new TokenService(accessToken);
    this.user = new UserService(accessToken);
  }

  setBaseUrl(url: string): void {
    this.llama.setBaseUrl(url);
    this.llamaPicture.setBaseUrl(url);
    this.token.setBaseUrl(url);
    this.user.setBaseUrl(url);
  }

  setAccessToken(accessToken: string) {
    this.llama.setAccessToken(accessToken);
    this.llamaPicture.setAccessToken(accessToken);
    this.token.setAccessToken(accessToken);
    this.user.setAccessToken(accessToken);
  }
}

export default Llamastore;
