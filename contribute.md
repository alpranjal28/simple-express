## dockerfile
- docker network create prism
- docker build -t express-postgres .
- docker run -d --name dbase --network prism -e POSTGRES_USER=post -e POSTGRES_PASSWORD=gres -p 5432:5432 postgres
- docker run -e DATABASE_URL_POSTGRES=postgresql://post:gres@dbase:5432/mydb --network prism -p 3000:3000 express-postgres

## docker compose
- 