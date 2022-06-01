## Project

This project simulates ordering a product. When the order is placed, a message is sent to a kafka consumer where payment is processed.

Soon after, this consumer who processes the payment, once completed, sends a new message to a consumer that actually confirms the payment. This new message has as value a new order object with the status equal to approved.

The last consumer, in turn, receives this message as a parameter and updates the order status database from pending to approved.

## Running the app

- Add PostgreSQL credentials on [.example.env](./.example.env) and rename it to `.env`

- Run `docker-compose up` to start the application

## Playing around

- Run `docker-compose logs -f app` in another terminal

- Make a `POST` request on `http://localhost:3000/orders` with the following body:

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
