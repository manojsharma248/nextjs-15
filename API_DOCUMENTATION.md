# API Documentation

This document describes the REST API endpoints available in this Next.js application.

## Base URL

```
http://localhost:3000/api
```

## Endpoints

### Health Check

#### GET /api/health

Check if the API is running.

**Response:**

```json
{
  "status": "ok",
  "timestamp": "2024-01-17T10:00:00.000Z",
  "message": "API is running"
}
```

---

## Users API

### GET /api/users

Get all users or filter by email.

**Query Parameters:**

- `email` (optional): Filter by email address

**Example:**

```bash
GET /api/users
GET /api/users?email=john@example.com
```

**Response:**

```json
{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "role": "admin",
      "createdAt": "2024-01-15T10:00:00Z"
    }
  ],
  "count": 1
}
```

### GET /api/users/[id]

Get a specific user by ID.

**Response:**

```json
{
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "role": "admin",
    "createdAt": "2024-01-15T10:00:00Z"
  }
}
```

### POST /api/users

Create a new user.

**Request Body:**

```json
{
  "name": "New User",
  "email": "newuser@example.com",
  "role": "user"
}
```

**Response (201):**

```json
{
  "user": {
    "id": 4,
    "name": "New User",
    "email": "newuser@example.com",
    "role": "user",
    "createdAt": "2024-01-17T10:00:00Z"
  },
  "message": "User created successfully"
}
```

### PUT /api/users/[id]

Update a user completely.

**Request Body:**

```json
{
  "name": "Updated Name",
  "email": "updated@example.com",
  "role": "admin"
}
```

### PATCH /api/users/[id]

Partially update a user.

**Request Body:**

```json
{
  "name": "Updated Name"
}
```

### DELETE /api/users/[id]

Delete a user.

**Response:**

```json
{
  "message": "User deleted successfully"
}
```

---

## Products API

### GET /api/products

Get all products or filter by category.

**Query Parameters:**

- `category` (optional): Filter by category

**Example:**

```bash
GET /api/products
GET /api/products?category=Electronics
```

**Response:**

```json
{
  "products": [
    {
      "id": 1,
      "name": "Laptop",
      "price": 999.99,
      "category": "Electronics",
      "stock": 50,
      "description": "High-performance laptop"
    }
  ],
  "count": 1
}
```

### GET /api/products/[id]

Get a specific product by ID.

### POST /api/products

Create a new product.

**Request Body:**

```json
{
  "name": "New Product",
  "price": 199.99,
  "category": "Electronics",
  "stock": 100,
  "description": "Product description"
}
```

### PUT /api/products/[id]

Update a product.

### DELETE /api/products/[id]

Delete a product.

---

## Posts API

### GET /api/posts

Get all posts or filter by published status.

**Query Parameters:**

- `published` (optional): Filter by published status (true/false)

**Example:**

```bash
GET /api/posts
GET /api/posts?published=true
```

**Response:**

```json
{
  "posts": [
    {
      "id": 1,
      "title": "Getting Started with Next.js",
      "content": "Next.js is a powerful React framework...",
      "author": "John Doe",
      "published": true,
      "createdAt": "2024-01-10T08:00:00Z"
    }
  ],
  "count": 1
}
```

### GET /api/posts/[id]

Get a specific post by ID.

### POST /api/posts

Create a new post.

**Request Body:**

```json
{
  "title": "New Post",
  "content": "Post content here...",
  "author": "Author Name",
  "published": false
}
```

### PUT /api/posts/[id]

Update a post.

### DELETE /api/posts/[id]

Delete a post.

---

## Error Responses

### 400 Bad Request

```json
{
  "error": "Name and email are required"
}
```

### 404 Not Found

```json
{
  "error": "User not found"
}
```

### 409 Conflict

```json
{
  "error": "Email already exists"
}
```

### 500 Internal Server Error

```json
{
  "error": "Internal server error"
}
```

---

## Testing the API

### Using the Browser

Visit http://localhost:3000/api-test to use the interactive testing dashboard.

### Using cURL

**Get all users:**

```bash
curl http://localhost:3000/api/users
```

**Create a user:**

```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","role":"user"}'
```

**Update a user:**

```bash
curl -X PUT http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated Name"}'
```

**Delete a user:**

```bash
curl -X DELETE http://localhost:3000/api/users/1
```

### Using Postman or Thunder Client

Import the endpoints and test them with your preferred API client.

---

## Data Store

The data is stored in memory using the `/lib/db.js` module. This means:

- ✅ Fast and simple for testing
- ⚠️ Data resets when server restarts
- ⚠️ Not suitable for production

For production, replace with a real database (PostgreSQL, MongoDB, etc.).
