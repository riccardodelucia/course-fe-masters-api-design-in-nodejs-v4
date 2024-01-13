## Docker postgres commands

### Access pg REPL da dentro al container:

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
