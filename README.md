# Teste Pratico Sunne

> ## Desenvolvimento do projeto

- [ x ] Estruturação das pastas
- [ x ] implementação do typescript
- [ x ] implementação das rotas
- [ x ] implementação dos controllers e services
- [ x ] implementação do Joi
- [ x ] configuração do axios
- [ x ] integração com serviço externo
- [ ] implementação dos mappers e dtos
- [ ] implementação do swagger
- [ ] tratamento de erros e exceções
- [ ] implementação dos logs

> ## Estrutura de Pastas

```
/src
  /config: Contém arquivos de configuração, como conexão com banco de dados, variáveis de ambiente, etc.

  /controllers: Contém os controladores que lidam com as requisições HTTP e retornam respostas.

  /infra: Contém a lógica de infraestrutura, como acesso ao banco de dados, integrações com serviços externos, etc.

    /axios: Contem configuração padrão para as chamadas a apis
    /database: Contém as configurações de conexão com banco de dados
    /fakerApi: Contém as configurações de chamadas para o serviço terceiro
    / gRPC: POr se tratar de uma api de microserviço o gRPC será usado para comunicação com outros microserviços

  /dtos: Contém (DTOs) Data Transfer Object

  /middleware: Contém funções de middleware que podem ser usadas para processar requisições antes de chegarem aos controladores.

  /routes: Contém as definições de rotas, que mapeiam URLs para controladores específicos.

  /validators: Para manter a lógica de validação separada dos controladores e modelos, especialmente se você estiver usando bibliotecas de validação como Joi ou express-validator.

  /services: Contém a lógica de negócios que não se encaixa diretamente nos controladores ou modelos. Isso pode incluir operações complexas que envolvem múltiplos modelos ou serviços externos.

  /utils: Contém funções utilitárias que podem ser usadas em várias partes do aplicativo.

/test: Contém os testes unitários e de integração para o aplicativo.

```

> ## Desafio

Teste Node.js v2

Objetivo final:
Crie uma aplicação com Express.js para simular a arquitetura de um
microsserviço de faturamento (genérico).

Descrição das responsabilidades do microsserviço:

1. Autenticação/Validação de acesso
2. Integração com API externa para capturar dados de clientes
3. Criar faturas
4. Envio de e-mails de cobrança
5. Acompanhamento dos status das faturas

Dentre as responsabilidades citadas, apenas o item 2 deverá ser implementado:
A aplicação terá um endpoint para capturar uma lista de clientes.
Ex: /clients/list
Este endpoint deverá puxar informações de 20 empresas (clientes) através
desta API:

- https://fakerapi.it/api/v1/companies?_quantity=20 => Para cada empresa, deverá ser consultado uma pessoa responsável:
- https://fakerapi.it/api/v1/persons?_quantity=1 => Este endpoint deverá retornar a lista de clientes na seguinte estrutura:

```json
{
  "total": 20,
  "clients": [
    { "name": "", "email": "", "phone": "", "person": { "fullname": "" } }
  ]
}
```

Pontos importantes:

1. Criar aplicação da forma que você acha ideal
2. Criar organização do projeto com base nas responsabilidades do
   microsserviço (diretórios e arquivos vazios)
3. Aplicar conceitos de assincronicidade blocking e non-blocking

Opcionais:

1. Registro de logs
2. Dar solução de como resolver exceções não tratadas
