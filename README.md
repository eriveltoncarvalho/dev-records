<h2 align="center">
  cashback
</h2>
<p align="left">
  <a>A api foi desenvolvida em node.js com typescript.</a></br>
  <a>Para utilizar a api execute os comandos abaixo:</a>
</p>
<p align="left" >
  * <a>Instalar o Docker</a></br>
  * <a>Criar o banco de acordo a configuração do arquivo <strong>ormconfig.js</strong></a></br>
  * <a>Execute a SQL no banco antes de rodar o migration: <strong>CREATE EXTENSION IF NOT EXISTS "uuid-ossp";</strong></a></br>
  * <a>yarn install</a></br>
  * <a>yarn dev:server</a>
</p>
</br>
<h3><strong> Rotas disponíveis</strong></h3>
<p align="left" >
  <a><strong>Cadastrar usuário:</strong></a></br>
  POST: <strong>localhost:3333/users</strong></br>
  A requisição do cadastro de usuário deve ser enviada via JSON com o formato abaixo:</br>
  <strong>Observação:</strong> O campo type aceita apenas os valores ['REVENDEDOR(A)', 'GERENTE']

```json
{
  "name": "Pedro Silva",
  "cpf": "12345678901",
  "type":"REVENDEDOR(A)",
  "email": "pedro@gmail.com",
  "password": "12345678"
}
```

  <a><strong>Login na api</strong></a></br>
  POST: <strong>localhost:3333/sessions</strong></br>

```json
{
  "email": "pedro@gmail.com",
  "password": "12345678"
}
```
  Após fazer o login é gerado um token para ser utilizado como autenticação:

  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzA2MzI5NjMsImV4cCI6MTYzMDcxOTM2Mywic3ViIjoiM2IxYTFkY2UtOWU2OC00OTIzLWJhMTQtYmMxZjBiYzE4OTE5In0.WHanIYOvTMYmWHlK7FxtYCiQy6SpL-EjMiltzHiUDqc"
  }
  ```

  <a><strong>Cadastrar produto:</strong></a></br>
  POST: <strong>localhost:3333/products</strong></br>
  A requisição do cadastro de produto deve ser enviada via JSON com o formato abaixo:</br>
  <strong>Observação:</strong> Necessário enviar o token de autenticação.

```json
{
  "name": "Produto 01",
  "price": "50.00",
  "quantity": "10"
}
```
  <a><strong>Cadastrar cliente:</strong></a></br>
  POST: <strong>localhost:3333/customers</strong></br>
  A requisição do cadastro de cliente deve ser enviada via JSON com o formato abaixo:</br>
  <strong>Observação:</strong> Necessário enviar o token de autenticação.

```json
{
  "name": "João Silva",
  "cpf": "12345678906",
  "email": "joao@gmail.com"
}
```

 <a><strong>Cadastrar venda:</strong></a></br>
  POST: <strong>localhost:3333/sales</strong></br>
  A requisição do cadastro de venda deve ser enviada via JSON com o formato abaixo:</br>
  <strong>Observação:</strong> Necessário enviar o token de autenticação.

```json
{
  "users_id": "c7492057-7e5d-4906-b498-3be7f6aa5412",
  "customers_id": "3fbf98ae-2f21-456f-84d4-3c51f5cef83c",
  "products": [
     {
       "id": "3c01da5c-2a44-4f8f-ace2-faac92662329",
       "quantity": "2"
     }
  ]
}
```

  <a><strong>Listar a venda</strong></a></br>
  GET: <strong>localhost:3333/sales/:id</strong></br>
  Informe o id da venda para listar.</br>
  <strong>Observação:</strong> Necessário enviar o token de autenticação.</br>
  Exemplo abaixo do retorno da consulta.

```json
  {
    "id": "765d66aa-efa2-4a12-b098-391fcebc0fc4",
    "users_id": "c7492057-7e5d-4906-b498-3be7f6aa5412",
    "customers_id": "3fbf98ae-2f21-456f-84d4-3c51f5cef83c",
    "status": "VALIDACAO",
    "total": "100.00",
    "cashback_percentage": "10.00",
    "cashback_value": "10.00",
    "created_at": "2021-09-03T00:14:48.211Z",
    "updated_at": "2021-09-03T00:14:48.211Z",
    "sales_items": [
        {
            "id": "3e426fb7-e469-4b79-9b88-a6d246480207",
            "products_id": "3c01da5c-2a44-4f8f-ace2-faac92662329",
            "sales_id": "765d66aa-efa2-4a12-b098-391fcebc0fc4",
            "price": "50.00",
            "quantity": 2,
            "value_total_item": "100.00",
            "created_at": "2021-09-03T00:14:48.211Z",
            "updated_at": "2021-09-03T00:14:48.211Z"
        }
    ],
    "customer": {
        "id": "3fbf98ae-2f21-456f-84d4-3c51f5cef83c",
        "name": "Pedro Silva",
        "cpf": "12345678902",
        "email": "pedrosilva@gmail.com",
        "created_at": "2021-09-02T16:52:53.412Z",
        "updated_at": "2021-09-02T16:52:53.412Z"
    }
}

```
</p>



