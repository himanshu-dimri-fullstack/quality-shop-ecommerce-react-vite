# Quality Shop E-Commerce

A React (Vite) eCommerce web application with a **local JSON Server (mock backend)**.

---

## Features

* Built a responsive UI using React (Vite) and Tailwind CSS
* Used JSON Server as a mock backend for creating RESTful APIs
* Implemented dynamic product detail pages using React Router params
* Created Add to Cart functionality using React Context API
* Implemented basic user authentication (mock) using Context API
* Fetched and managed product data from local API

---

## Tech Stack

### Frontend

* React.js (Vite)
* Tailwind CSS

### Backend (Mock - Local)

* JSON Server (`json-server`)
* db.json (local database)

---

## Installation & Setup

### 1️⃣ Clone the repo

```bash
git clone https://github.com/himanshu-dimri-fullstack/quality-shop-ecommerce-react-vite
cd /quality-shop-ecommerce-react-vite
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run JSON Server (Mock Backend)

```bash
npx json-server --watch db.json --port 3000
```

👉 API will run on:

```
http://localhost:3000
```

---

### 4️⃣ Run Frontend

```bash
npm run dev
```

👉 Frontend will run on:

```
http://localhost:5173
```

---

## API Example

* Get all products:

```
GET http://localhost:3000/products
```

---

## Note

* This project uses a **local mock backend (JSON Server)**
* No real database or authentication system is used
* Data is not persistent in production

---

## Future Improvements

* Integrate real backend (Node.js + MongoDB)
* Add authentication using JWT
* Add payment gateway integration

---
