## Project

I will add some project info here later on

## Running the app

- Add PostgreSQL credentials on [.example.env](./.example.env) and rename it to `.env`

- Run `docker-compose up` to start the application

## Playing around

- Start one terminal with `docker-compose exec app`

- Make a `POST` request on `http://localhost:3000` with the following body

```json
{
  "amount": 100
}
```

- Look at your terminal to see the messages

## Built with

- [TypeScript](https://www.typescriptlang.org/)
- [Nest.js](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Apache Kafka](https://kafka.apache.org/)
- [Docker](https://www.docker.com/)
