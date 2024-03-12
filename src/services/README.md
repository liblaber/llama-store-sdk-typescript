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
import { Llamastore } from 'llamastore';


const sdk = new Llamastore({ accessToken: process.env.LLAMASTORE_ACCESS_TOKEN });

(async () => {
  const input = {};
  const result = await sdk.llamaPicture
    .createLlamaPicture(input, 1);
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
import { Llamastore } from 'llamastore';


const sdk = new Llamastore({ accessToken: process.env.LLAMASTORE_ACCESS_TOKEN });

(async () => {
  const result = await sdk.llamaPicture
    .getLlamaPictureByLlamaId(1);
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
import { Llamastore } from 'llamastore';


const sdk = new Llamastore({ accessToken: process.env.LLAMASTORE_ACCESS_TOKEN });

(async () => {
  const result = await sdk.llamaPicture
    .deleteLlamaPicture(2);
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
import { Llamastore } from 'llamastore';


const sdk = new Llamastore({ accessToken: process.env.LLAMASTORE_ACCESS_TOKEN });

(async () => {
  const input = {};
  const result = await sdk.llamaPicture
    .updateLlamaPicture(input, 2);
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
import { Llamastore } from 'llamastore';


const sdk = new Llamastore({ accessToken: process.env.LLAMASTORE_ACCESS_TOKEN });

(async () => {
  const input = {"age":5,"color":"brown","name":"libby the llama","rating":4};
  const result = await sdk.llama
    .createLlama(input);
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
import { Llamastore } from 'llamastore';


const sdk = new Llamastore({ accessToken: process.env.LLAMASTORE_ACCESS_TOKEN });

(async () => {
  const result = await sdk.llama
    .getLlamas();
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
import { Llamastore } from 'llamastore';


const sdk = new Llamastore({ accessToken: process.env.LLAMASTORE_ACCESS_TOKEN });

(async () => {
  const result = await sdk.llama
    .getLlamaById(1);
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
import { Llamastore } from 'llamastore';


const sdk = new Llamastore({ accessToken: process.env.LLAMASTORE_ACCESS_TOKEN });

(async () => {
  const result = await sdk.llama
    .deleteLlama(2);
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
import { Llamastore } from 'llamastore';


const sdk = new Llamastore({ accessToken: process.env.LLAMASTORE_ACCESS_TOKEN });

(async () => {
  const input = {"age":5,"color":"brown","name":"libby the llama","rating":4};
  const result = await sdk.llama
    .updateLlama(input, 2);
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
import { Llamastore } from 'llamastore';


const sdk = new Llamastore({ accessToken: process.env.LLAMASTORE_ACCESS_TOKEN });

(async () => {
  const input = {"email":"noone@example.com","password":"Password123!"};
  const result = await sdk.token
    .createApiToken(input);
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
import { Llamastore } from 'llamastore';


const sdk = new Llamastore({ accessToken: process.env.LLAMASTORE_ACCESS_TOKEN });

(async () => {
  const result = await sdk.user
    .getUserByEmail('Xpey^@OTbusO/'_.E?0p:[u');
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
import { Llamastore } from 'llamastore';


const sdk = new Llamastore({ accessToken: process.env.LLAMASTORE_ACCESS_TOKEN });

(async () => {
  const input = {"email":"noone@example.com","password":"Password123!"};
  const result = await sdk.user
    .registerUser(input);
  console.log(result);
})();

```




