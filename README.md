# Course: Frontend Masters - API Design in Node.js, v4

This project implements the code from this [course](https://frontendmasters.com/courses/api-design-nodejs-v4/).

Instead of creating a cloud Postgres db on **Render.com**, a `docker-compose.yml` file is used to spin up a local containerized version of the db, which is then controlled through **Prisma**.

## Docker postgres commands

### Access pg REPL within the container:

```
pgsql -U root_username -d db_name
```

Subsitute `root_username` and `db_name` respectively with POSTGRES_USER and POSTGRES_DB from your **.env** file values

## Prisma commands

Init prisma:

```
npx prisma init
```

Migrate DB (first initialization of db tables):

```
npx prisma migrate dev --name init
```
