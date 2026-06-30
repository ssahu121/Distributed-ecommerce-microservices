# 🛒 E-Commerce Microservices Platform

A full-stack E-Commerce application built using **Spring Boot Microservices**, **React.js**, and **MySQL**. The project provides a scalable architecture where different business functionalities are separated into independent services.

---

# 📌 Project Overview

This project demonstrates how a modern e-commerce platform can be developed using a microservices architecture. It includes product management, user authentication, shopping cart, order processing, API Gateway, Service Registry, and frontend integration.

The backend follows industry-standard microservice architecture while the frontend provides a responsive and user-friendly shopping experience.

---

# 🚀 Features

## User Features

- User Registration
- User Login
- JWT Authentication
- Browse Products
- Product Details
- Search Products
- Filter Products
- Add to Cart
- Remove from Cart
- Quantity Management
- Place Orders
- Order History
- Responsive UI

---

## Admin Features

- Add Products
- Update Products
- Delete Products
- Manage Inventory
- Manage Orders
- Product Image Support

---

# 🏗️ Architecture

```
                React Frontend
                      |
                 API Gateway
                      |
      ---------------------------------
      |        |        |      |      |
 User Service Product Cart Order Inventory
      |        |        |      |      |
      -------- Service Registry --------
                     |
                 Config Server
```

---

# 💻 Tech Stack

## Frontend

- React.js
- Vite
- HTML5
- CSS3
- JavaScript (ES6)
- Axios
- React Router DOM

---

## Backend

- Java
- Spring Boot
- Spring MVC
- Spring Data JPA
- Spring Security
- Spring Cloud Gateway
- Eureka Server
- Config Server
- REST API
- JWT Authentication
- Lombok

---

## Database

- MySQL

---

## Tools

- IntelliJ IDEA
- VS Code
- Postman
- Git
- GitHub
- Maven

---

# 📂 Project Structure

```
E-Commerce-Microservices
│
├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   ├── services
│   ├── assets
│   └── App.jsx
│
├── api-gateway
│
├── service-registry
│
├── config-server
│
├── user-service
│
├── product-service
│
├── cart-service
│
├── order-service
│
├── inventory-service
│
└── README.md
```

---

# ⚙️ Backend Microservices

## API Gateway

- Single Entry Point
- Route Management
- Authentication Filter
- Request Forwarding

---

## Eureka Server

- Service Discovery
- Dynamic Registration
- Load Balancing Support

---

## Config Server

- Centralized Configuration
- Environment Configuration

---

## User Service

- User Registration
- Login
- JWT Authentication
- User Management

---

## Product Service

- Add Product
- Update Product
- Delete Product
- View Products
- Product Search

---

## Cart Service

- Add to Cart
- Remove from Cart
- Update Quantity
- Get Cart Items

---

## Order Service

- Place Order
- Order History
- Order Details

---

## Inventory Service

- Stock Management
- Quantity Update
- Product Availability

---

# 🎨 Frontend Features

- Modern UI
- Responsive Design
- Product Cards
- Product Details
- Shopping Cart
- Navbar
- Search Bar
- Category Filter
- Login/Register Pages
- Protected Routes

---

# 🔐 Authentication

- JWT Token
- Secure APIs
- Role Based Access
- Spring Security

---

# 📡 REST APIs

## User APIs

```
POST /auth/register
POST /auth/login
GET /users
```

---

## Product APIs

```
GET /products
GET /products/{id}
POST /products
PUT /products/{id}
DELETE /products/{id}
```

---

## Cart APIs

```
GET /cart
POST /cart
DELETE /cart/{id}
PUT /cart/{id}
```

---

## Order APIs

```
POST /orders
GET /orders
GET /orders/{id}
```

---

# 🗄️ Database Tables

- Users
- Products
- Cart
- Orders
- Order_Items
- Inventory

---

# 📷 Screenshots

You can add screenshots here.

```
screenshots/

Home Page

Product Page

Cart

Login

Register

Admin Dashboard
```

---

# 📦 Installation

## Clone Repository

```bash
git clone https://github.com/your-username/ecommerce-microservices.git
```

---

## Backend

```bash
cd backend
mvn clean install
```

Run services in order:

1. Config Server
2. Eureka Server
3. API Gateway
4. User Service
5. Product Service
6. Cart Service
7. Order Service
8. Inventory Service

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# 🌐 Default Ports

| Service | Port |
|----------|------|
| Frontend | 5173 |
| API Gateway | 8080 |
| Eureka | 8761 |
| Config Server | 8888 |
| User Service | 8081 |
| Cart Service | 8082 |
| Product Service | 8083 |
| Order Service | 8084 |
| Inventory Service | 8085 |

---

# 📈 Future Enhancements

- Payment Gateway Integration
- Razorpay
- Stripe
- Wishlist
- Product Reviews
- Ratings
- Coupon System
- Email Notifications
- Order Tracking
- Admin Dashboard Analytics
- Docker
- Kubernetes
- Redis Cache
- Elasticsearch
- CI/CD Pipeline

---

# 📚 Learning Outcomes

- Spring Boot
- Spring Cloud
- Microservices
- REST APIs
- JWT Authentication
- React.js
- Axios
- API Gateway
- Eureka Server
- Config Server
- MySQL
- Git & GitHub

---

# 👨‍💻 Author

**Shivam Sahu**

- GitHub: https://github.com/ssahu121
- LinkedIn: https://www.linkedin.com/in/ssahi121

---

# ⭐ Support

If you like this project, don't forget to **Star ⭐ the repository**.

---

# 📄 License

This project is developed for educational and portfolio purposes.
