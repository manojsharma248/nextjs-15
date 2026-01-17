// Mock database - In-memory data store for testing
// This simulates a database but data will reset on server restart

let users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "admin",
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "user",
    createdAt: "2024-01-16T11:30:00Z",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "user",
    createdAt: "2024-01-17T09:15:00Z",
  },
];

let products = [
  {
    id: 1,
    name: "Laptop",
    price: 999.99,
    category: "Electronics",
    stock: 50,
    description: "High-performance laptop",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 699.99,
    category: "Electronics",
    stock: 100,
    description: "Latest smartphone model",
  },
  {
    id: 3,
    name: "Headphones",
    price: 149.99,
    category: "Audio",
    stock: 200,
    description: "Wireless noise-canceling headphones",
  },
  {
    id: 4,
    name: "Monitor",
    price: 299.99,
    category: "Electronics",
    stock: 75,
    description: "27-inch 4K monitor",
  },
];

let posts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    content: "Next.js is a powerful React framework...",
    author: "John Doe",
    published: true,
    createdAt: "2024-01-10T08:00:00Z",
  },
  {
    id: 2,
    title: "Understanding API Routes",
    content: "API routes provide a solution to build your API...",
    author: "Jane Smith",
    published: true,
    createdAt: "2024-01-12T14:20:00Z",
  },
  {
    id: 3,
    title: "Draft Post",
    content: "This is a draft post...",
    author: "Bob Johnson",
    published: false,
    createdAt: "2024-01-14T16:45:00Z",
  },
];

// Users CRUD operations
export const db = {
  // Users
  users: {
    getAll: () => users,
    getById: (id) => users.find((u) => u.id === parseInt(id)),
    getByEmail: (email) => users.find((u) => u.email === email),
    create: (userData) => {
      const newUser = {
        id: users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1,
        ...userData,
        createdAt: new Date().toISOString(),
      };
      users.push(newUser);
      return newUser;
    },
    update: (id, userData) => {
      const index = users.findIndex((u) => u.id === parseInt(id));
      if (index === -1) return null;
      users[index] = { ...users[index], ...userData };
      return users[index];
    },
    delete: (id) => {
      const index = users.findIndex((u) => u.id === parseInt(id));
      if (index === -1) return false;
      users.splice(index, 1);
      return true;
    },
  },

  // Products
  products: {
    getAll: () => products,
    getById: (id) => products.find((p) => p.id === parseInt(id)),
    getByCategory: (category) =>
      products.filter((p) => p.category === category),
    create: (productData) => {
      const newProduct = {
        id:
          products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1,
        ...productData,
      };
      products.push(newProduct);
      return newProduct;
    },
    update: (id, productData) => {
      const index = products.findIndex((p) => p.id === parseInt(id));
      if (index === -1) return null;
      products[index] = { ...products[index], ...productData };
      return products[index];
    },
    delete: (id) => {
      const index = products.findIndex((p) => p.id === parseInt(id));
      if (index === -1) return false;
      products.splice(index, 1);
      return true;
    },
  },

  // Posts
  posts: {
    getAll: () => posts,
    getById: (id) => posts.find((p) => p.id === parseInt(id)),
    getPublished: () => posts.filter((p) => p.published),
    create: (postData) => {
      const newPost = {
        id: posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1,
        ...postData,
        createdAt: new Date().toISOString(),
      };
      posts.push(newPost);
      return newPost;
    },
    update: (id, postData) => {
      const index = posts.findIndex((p) => p.id === parseInt(id));
      if (index === -1) return null;
      posts[index] = { ...posts[index], ...postData };
      return posts[index];
    },
    delete: (id) => {
      const index = posts.findIndex((p) => p.id === parseInt(id));
      if (index === -1) return false;
      posts.splice(index, 1);
      return true;
    },
  },
};
