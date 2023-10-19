import { LlamaPictureService } from './services/llamaPicture/LlamaPicture';
import { LlamaService } from './services/llama/Llama';
import { TokenService } from './services/token/Token';
import { UserService } from './services/user/User';

export * from './models';

export * as LlamaModels from './services/llama';
export * as TokenModels from './services/token';
export * as LlamaPictureModels from './services/llamaPicture';
export * as UserModels from './services/user';

type Config = {
  accessToken?: string;
};

export class Llamastore {
  public llamaPicture: LlamaPictureService;
  public llama: LlamaService;
  public token: TokenService;
  public user: UserService;

  constructor({ accessToken = '' }: Config) {
    this.llamaPicture = new LlamaPictureService(accessToken);
    this.llama = new LlamaService(accessToken);
    this.token = new TokenService(accessToken);
    this.user = new UserService(accessToken);
  }

  setBaseUrl(url: string): void {
    this.llamaPicture.setBaseUrl(url);
    this.llama.setBaseUrl(url);
    this.token.setBaseUrl(url);
    this.user.setBaseUrl(url);
  }

  setAccessToken(accessToken: string) {
    this.llamaPicture.setAccessToken(accessToken);
    this.llama.setAccessToken(accessToken);
    this.token.setAccessToken(accessToken);
    this.user.setAccessToken(accessToken);
  }
}
