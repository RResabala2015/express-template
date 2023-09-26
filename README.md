# MongoDB Express NodeJS (MEN)

Backend template microservice with Alpine, NodeJS, Express, MongoDB, RabbitMq.

## CI/CD DevOps

This project has configured dev ops using gitlab pipelines, sonarqube and google cloud kubernetes.

## Development Environment

Docker compose used to create the containers:

- MEN ([Alpine](https://www.alpinelinux.org/), [NodeJs](https://nodejs.org/en), [Express](https://expressjs.com/)).
- [RabbitMq ](https://www.rabbitmq.com/).
- [MongoDB](https://www.mongodb.com/docs/).

The help commands to help you build the project are found in the following

<details><summary><b> Show commands </b></summary>

- Command to run tests: `npm run test`

- Command to run in development with nodemon: `npm run dev`

- Command to run in stage or production: `npm run start`

- Command to run eslint fix: `npm run lint:fix`

</details>

## Update the container configuration:

If you want to change any configuration of the container, you must rebuild it:

<details><summary><b> Show commands </b></summary>

#### Build service:
```shell
docker compose up -d --no-deps --build {service-name}
```
or
```shell
docker compose -f "docker-compose-dev.yml" up -d --build
```

#### View container logs:
```shell
docker container logs { id container } -f
```

#### Connect to the container:
```shell
docker compose exec {service-name} bash
```
ó
```shell
docker exec -it {service-name} sh
```

#### Delete all:
```shell
docker compose down --rmi all
```

#### Restart:
```shell
docker compose restart
```

#### Stop:
```shell
docker compose stop
```

#### Down
```shell
docker compose down -v
```

#### Copy packets from container to host
```shell
docker cp {service-name}:./usr/src/app/package.json /{HOST_DIR}
```

and
```shell
docker cp {service-name}:./usr/src/app/package-lock.json /{HOST_DIR}
```


</details>

## Resources:
List of the libraries used.

<details><summary><b> Show libraries </b></summary>

> Dependencies:

- [amqplib](https://www.npmjs.com/package/amqplib)
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [debug](https://www.npmjs.com/package/debug)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express)
- [http-errors](https://www.npmjs.com/package/http-errors)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [morgan](https://www.npmjs.com/package/morgan)
- [pug](https://www.npmjs.com/package/pug)
- [uuid](https://www.npmjs.com/package/uuid)

> Dev Dependencies:

- [eslint](https://www.npmjs.com/package/eslint)
- [eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-n](https://www.npmjs.com/package/eslint-plugin-n)    
- [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)
- [eslint-plugin-standard](https://www.npmjs.com/package/eslint-plugin-standard)
- [jest](https://www.npmjs.com/package/jest)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [supertest](https://www.npmjs.com/package/supertest)

</details>

## License:

This microservice is open-sourced software licensed unde the [MIT license](https://opensource.org/licenses/MIT).