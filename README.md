# Llamastore Typescript SDK 0.0.1
The Typescript SDK for Llamastore.
- API version: 0.0.1
- SDK version: 0.0.1
## Table of Contents
- [About the API](#requirements)
- [Installation](#installation)
- [Authentication](#authentication)
    - [Access Token](#access-token)
- [API Endpoint Services](#api-endpoint-services)
- [API Models](#api-models)
- [Sample Usage](#sample-usage)
- [Llamastore Services](#llamastore-services)
- [License](#license)
## About the API
The llama store API! Get details on all your favorite llamas.  ## To use this API  - You will need to register a user, once done you can request an API token. - You can then use your API token to get details about the llamas.  ## User registration  To register a user, send a POST request to `/user` with the following body:      ```json {      email :  <your email> ,      password :  <your password>  } ``` This API has a maximum of 1000 current users. Once this is exceeded, older users will be deleted. If your user is deleted, you will need to register again. ## Get an API token  To get an API token, send a POST request to `/user/apitoken` with the following body:      ```json {      email :  <your email> ,      password :  <your password>  } ```  This will return a token that you can use to authenticate with the API:  ```json {    access_token :  <your new token> ,    token_type :  bearer  } ```  ## Use the API token  To use the API token, add it to the `Authorization` header of your request:  ``` Authorization: Bearer <your token> ```   
## Installation
```sh
npm install llamastore  
```
## Authentication
To see whether an endpoint needs a specific type of authentication check the endpoint's documentation.
### Access Token
The Llamastore API uses access tokens as a form of authentication. You can set the access token when initializing the SDK through the constructor:
```
const sdk = new Llamastore('YOUR_ACCESS_TOKEN')
```
Or through the `setAccessToken` method:
```
const sdk = new Llamastore()
sdk.setAccessToken('YOUR_ACCESS_TOKEN')
```
You can also set it for each service individually:
```
const sdk = new Llamastore()
sdk.llama.setAccessToken('YOUR_ACCESS_TOKEN')
```
## Sample Usage
Here is a simple program demonstrating usage of this SDK. It can also be found in the `examples/src/index.ts` file in this directory.

When running the sample make sure to use `npm install` to install all the dependencies.

```Typescript
import { Llamastore } from 'llamastore';


const sdk = new Llamastore({ accessToken: process.env.LLAMASTORE_ACCESS_TOKEN });

(async () => {
  const result = await sdk.llama
    .getLlamas();
  console.log(result);
})();
 

```
# Llamastore Services
A list of all services and services methods.
- Services

    - [LlamaPicture](#llamapicture)

    - [Llama](#llama)

    - [Token](#token)

    - [User](#user)
- [All Methods](#all-methods)


## LlamaPicture

| Method    | Description|
| :-------- | :----------|
| [createLlamaPicture](#createllamapicture) | Create Llama Picture |
| [getLlamaPictureByLlamaId](#getllamapicturebyllamaid) | Get Llama Picture |
| [deleteLlamaPicture](#deletellamapicture) | Delete Llama Picture |
| [updateLlamaPicture](#updatellamapicture) | Update Llama Picture |


## Llama

| Method    | Description|
| :-------- | :----------|
| [createLlama](#createllama) | Create Llama |
| [getLlamas](#getllamas) | Get Llamas |
| [getLlamaById](#getllamabyid) | Get Llama |
| [deleteLlama](#deletellama) | Delete Llama |
| [updateLlama](#updatellama) | Update Llama |


## Token

| Method    | Description|
| :-------- | :----------|
| [createApiToken](#createapitoken) | Create Api Token |


## User

| Method    | Description|
| :-------- | :----------|
| [getUserByEmail](#getuserbyemail) | Get User By Email |
| [registerUser](#registeruser) | Register User |




## All Methods


### **createLlamaPicture**
Create Llama Picture
- HTTP Method: POST
- Endpoint: /llama/{llama_id}/picture

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| llamaId | number | The ID of the llama that this picture is for |
| input | object | Request body. |



**Return Type**

LlamaId

**Example Usage Code Snippet**
```Typescript
import { Llamastore } from './src';

const sdk = new Llamastore({ accessToken: process.env.LLAMASTORE_ACCESS_TOKEN });

(async () => {
  const input = {};
  const result = await sdk.llamaPicture.createLlamaPicture(input, 1);
  console.log(result);
})();

```

### **getLlamaPictureByLlamaId**
Get Llama Picture
- HTTP Method: GET
- Endpoint: /llama/{llama_id}/picture

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| llamaId | number | The ID of the llama to get the picture for |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { Llamastore } from './src';

const sdk = new Llamastore({ accessToken: process.env.LLAMASTORE_ACCESS_TOKEN });

(async () => {
  const result = await sdk.llamaPicture.getLlamaPictureByLlamaId(2);
  console.log(result);
})();

```

### **deleteLlamaPicture**
Delete Llama Picture
- HTTP Method: DELETE
- Endpoint: /llama/{llama_id}/picture

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| llamaId | number | The ID of the llama to delete the picture for |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { Llamastore } from './src';

const sdk = new Llamastore({ accessToken: process.env.LLAMASTORE_ACCESS_TOKEN });

(async () => {
  const result = await sdk.llamaPicture.deleteLlamaPicture(1);
  console.log(result);
})();

```

### **updateLlamaPicture**
Update Llama Picture
- HTTP Method: PUT
- Endpoint: /llama/{llama_id}/picture

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| llamaId | number | The ID of the llama that this picture is for |
| input | object | Request body. |



**Return Type**

LlamaId

**Example Usage Code Snippet**
```Typescript
import { Llamastore } from './src';

const sdk = new Llamastore({ accessToken: process.env.LLAMASTORE_ACCESS_TOKEN });

(async () => {
  const input = {};
  const result = await sdk.llamaPicture.updateLlamaPicture(input, 1);
  console.log(result);
})();

```


### **createLlama**
Create Llama
- HTTP Method: POST
- Endpoint: /llama

**Required Parameters**

| input | object | Request body. |



**Return Type**

Llama

**Example Usage Code Snippet**
```Typescript
import { Llamastore } from './src';

const sdk = new Llamastore({ accessToken: process.env.LLAMASTORE_ACCESS_TOKEN });

(async () => {
  const input = { age: 5, color: 'brown', name: 'libby the llama', rating: 4 };
  const result = await sdk.llama.createLlama(input);
  console.log(result);
})();

```

### **getLlamas**
Get Llamas
- HTTP Method: GET
- Endpoint: /llama


**Return Type**

GetLlamasResponse

**Example Usage Code Snippet**
```Typescript
import { Llamastore } from './src';

const sdk = new Llamastore({ accessToken: process.env.LLAMASTORE_ACCESS_TOKEN });

(async () => {
  const result = await sdk.llama.getLlamas();
  console.log(result);
})();

```

### **getLlamaById**
Get Llama
- HTTP Method: GET
- Endpoint: /llama/{llama_id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| llamaId | number | The llama's ID |



**Return Type**

Llama

**Example Usage Code Snippet**
```Typescript
import { Llamastore } from './src';

const sdk = new Llamastore({ accessToken: process.env.LLAMASTORE_ACCESS_TOKEN });

(async () => {
  const result = await sdk.llama.getLlamaById(1);
  console.log(result);
})();

```

### **deleteLlama**
Delete Llama
- HTTP Method: DELETE
- Endpoint: /llama/{llama_id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| llamaId | number | The llama's ID |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { Llamastore } from './src';

const sdk = new Llamastore({ accessToken: process.env.LLAMASTORE_ACCESS_TOKEN });

(async () => {
  const result = await sdk.llama.deleteLlama(1);
  console.log(result);
})();

```

### **updateLlama**
Update Llama
- HTTP Method: PUT
- Endpoint: /llama/{llama_id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| llamaId | number | The llama's ID |
| input | object | Request body. |



**Return Type**

Llama

**Example Usage Code Snippet**
```Typescript
import { Llamastore } from './src';

const sdk = new Llamastore({ accessToken: process.env.LLAMASTORE_ACCESS_TOKEN });

(async () => {
  const input = { age: 5, color: 'brown', name: 'libby the llama', rating: 4 };
  const result = await sdk.llama.updateLlama(input, 1);
  console.log(result);
})();

```


### **createApiToken**
Create Api Token
- HTTP Method: POST
- Endpoint: /token

**Required Parameters**

| input | object | Request body. |



**Return Type**

ApiToken

**Example Usage Code Snippet**
```Typescript
import { Llamastore } from './src';

const sdk = new Llamastore({ accessToken: process.env.LLAMASTORE_ACCESS_TOKEN });

(async () => {
  const input = { email: 'noone@example.com', password: 'Password123!' };
  const result = await sdk.token.createApiToken(input);
  console.log(result);
})();

```


### **getUserByEmail**
Get User By Email
- HTTP Method: GET
- Endpoint: /user/{email}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| email | string | The user's email address |



**Return Type**

User

**Example Usage Code Snippet**
```Typescript
import { Llamastore } from './src';

const sdk = new Llamastore({ accessToken: process.env.LLAMASTORE_ACCESS_TOKEN });

(async () => {
  const result = await sdk.user.getUserByEmail('=@@PyQ_.&');
  console.log(result);
})();

```

### **registerUser**
Register User
- HTTP Method: POST
- Endpoint: /user

**Required Parameters**

| input | object | Request body. |



**Return Type**

User

**Example Usage Code Snippet**
```Typescript
import { Llamastore } from './src';

const sdk = new Llamastore({ accessToken: process.env.LLAMASTORE_ACCESS_TOKEN });

(async () => {
  const input = { email: 'noone@example.com', password: 'Password123!' };
  const result = await sdk.user.registerUser(input);
  console.log(result);
})();

```




## License
License: MIT. See license in LICENSE.

