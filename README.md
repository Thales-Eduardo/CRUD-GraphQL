# Crud GraphQL

Para rodar o projeto tem que ter o `docker` instalado na sua maquina.

- Para subir os contêineres.

> docker-compose up -d

- Para deletar os contêineres.

> docker-compose down

---

**MUTATION**

```graphql
mutation {
  createUser(
    data: {
      firstName: "Thales"
      lastName: "Eduardo"
      email: "thalesdev22@gmail.com"
      active: true
    }
  ) {
    _id
    firstName
  }
}

mutation {
  updateUser(
    data: {
      firstName: "Thales22"
      lastName: "Eduardo"
      email: "thalesdev22@gmail.com"
      active: true
    }
  ) {
    fullname
  }
}

mutation {
  deleteUser(id: "614f5dbb4002d60861064c3d")
}

# Post

mutation {
  createPost(
    data: {
      title: "título"
      content: "Conteudo"
      author: "614f5dbb4002d60861064c3d"
    }
  ) {
    _id
    author {
      fullname
    }
  }
}

mutation {
  updatePost(
    data: {
      title: "título1"
      content: "Conteudo"
      author: "614f5dbb4002d60861064c3d"
    }
  ) {
    _id
    title
    author {
      fullname
    }
  }
}

mutation {
  deletePost(id: "614f5e0a4002d60861064c45")
}
```

**Query**

```gql
query {
  users {
    _id
    fullname
  }
}

query {
  user(id: "614f5dbb4002d60861064c3d") {
    fullname
  }
}

# Post

query {
  posts {
    title
    author {
      fullname
    }
  }
}

query {
  post(id: "614f5e4b4002d60861064c4f") {
    title
    content
  }
}
```
