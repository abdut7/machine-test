# Node.js PostgreSQL Microservices with Express Rest APIs

Full Article with implementation:
> [Node.js PostgreSQL   with Express Rest APIs]
 
The following table shows overview of the Rest APIs that will be exported:

- POST     `127.0.0.1:3001/book/get_book`                       get Books
- POST    `127.0.0.1:3000/book/create_book`                     add new Book
- POST     `127.0.0.1:3000/book/update_book`                    update Book by id

## Project setup

#### Create Table 
###### Run table.sql

### Run
#### Run Two microservices

```
nodemon  ./microservices/book_services/server.ts
```


```
nodemon  ./microservices/open_services/server.ts
```