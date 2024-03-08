import { Llamastore } from 'llamastore';


const sdk = new Llamastore({ accessToken: process.env.LLAMASTORE_ACCESS_TOKEN });

(async () => {
  try {
    const result = await sdk.llama
      .getLlamas();
    console.log(result);
  } catch (err) {
    const error = err as Error;
    console.error(error.message);
  }
})();
 

