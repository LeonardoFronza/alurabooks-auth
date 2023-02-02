
# AluraBooks Api

O AluraBooks é uma loja virtual que vende livros da Casa do Código. 
É um MVP que tá só começando e ainda tem muitas funcionalidades novas para serem desenvolvidas.

# JSONServer + JWT Auth

Essa é ma API Rest mockada, utilizando json-server e JWT.

## 🛠️ Instalação

```bash
$ npm install
$ npm run start-auth
```
## 🛠️ Como registrar?

Você pode fazer isso efetuando uma requisição post para:

```
POST http://localhost:8000/public/registrar
```

Com os seguintes dados:


```
{
  "id": 1,
  "email": "leonardo@gmail.com",  
  "senha": "12345",
  "nome": "Leonardo",
  "endereco": "Casa",
  "complemento": "Rua das Casas",
  "cep": "520"
}
```

Repare que o e-mail é um campo único e usuários com e-mails duplicados não serão persistidos.

## 🛠️ Como fazer login?

Você pode fazer isso efetuando uma requisição post para:

```
POST http://localhost:8000/public/login
```

Com os seguintes dados:


```
{
  "email": "leonardo@gmail.com",
  "senha": "12345",
}
```

Você vai receber um token no seguinte formato:

```
{
   "access_token": "<ACCESS_TOKEN>",
   "user": { ... dados do usuário ... }
}
```

## Autenticar próximas requests?

E então, adicionar este mesmo token ao header das próximas requisições:

```
Authorization: Bearer <ACCESS_TOKEN>
```