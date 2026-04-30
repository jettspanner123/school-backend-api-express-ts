<div align="center">

# Express TypeScript Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)

![License](https://img.shields.io/badge/License-ISC-purple?style=flat-square)
![Version](https://img.shields.io/badge/Version-1.0.0-blue?style=flat-square)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-ff69b4?style=flat-square)

A clean, production-ready REST API scaffold built with Node.js, TypeScript, Express, Prisma ORM, and PostgreSQL.

</div>

---

## Tech Stack

| Layer | Technology |
|---|---|
| ![Runtime](https://img.shields.io/badge/Runtime-Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) | JavaScript runtime built on V8 |
| ![Language](https://img.shields.io/badge/Language-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) | Strongly typed superset of JavaScript |
| ![Framework](https://img.shields.io/badge/Framework-Express_v5-000000?style=flat-square&logo=express&logoColor=white) | Fast, minimalist web framework |
| ![Database](https://img.shields.io/badge/Database-PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white) | Relational database |
| ![ORM](https://img.shields.io/badge/ORM-Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white) | Next-generation Node.js ORM with TypedSQL |
| ![Validation](https://img.shields.io/badge/Validation-Zod-3E67B1?style=flat-square) | Schema-first TypeScript validation |
| ![Formatter](https://img.shields.io/badge/Formatter-Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=black) | Opinionated code formatter |

---

## Project Structure

```
src/
├── config/          # Environment and database configuration
├── constants/       # App-wide constants and HTTP codes
├── controllers/     # Route handler logic
├── database/        # Prisma client and generated types
├── errors/          # Custom error classes
├── helpers/         # Utility helpers
├── middleware/       # Express middleware (validation, error handling)
├── models/          # Request and response interfaces
├── routes/          # Route definitions
├── services/        # Business logic layer
├── types/           # Custom TypeScript types
├── utils/           # Shared utilities
└── validators/      # Zod validation schemas
prisma/
├── schema.prisma    # Database schema
├── migrations/      # Migration history
└── sql/             # TypedSQL raw queries
```

---

## API Routes

All routes are prefixed with `/api`.

### ![App](https://img.shields.io/badge/App-Routes-6366f1?style=flat-square)

| Method | Endpoint | Description |
|---|---|---|
| ![GET](https://img.shields.io/badge/GET-61affe?style=flat-square) | `/api/` | Returns API health and info |

#### Response

```json
{
    "success": true,
    "message": "API is ready",
    "data": {}
}
```

---

### ![School](https://img.shields.io/badge/School-Routes-10b981?style=flat-square)

| Method | Endpoint | Description |
|---|---|---|
| ![POST](https://img.shields.io/badge/POST-49cc90?style=flat-square) | `/api/school/addSchool` | Add a new school to the database |
| ![GET](https://img.shields.io/badge/GET-61affe?style=flat-square) | `/api/school/listSchools` | List all schools sorted by distance from a coordinate |

---

#### POST `/api/school/addSchool`

![POST](https://img.shields.io/badge/POST-49cc90?style=flat-square)
![Auth](https://img.shields.io/badge/Auth-None-lightgrey?style=flat-square)
![Body](https://img.shields.io/badge/Body-JSON-orange?style=flat-square)

Request body:

```json
{
    "name": "Springfield Elementary",
    "address": "123 Main Street, Springfield",
    "latitude": 37.7749,
    "longitude": -122.4194
}
```

Success response `201 Created`:

```json
{
    "success": true,
    "message": "School added successfully",
    "data": {
        "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        "name": "Springfield Elementary",
        "address": "123 Main Street, Springfield",
        "latitude": 37.7749,
        "longitude": -122.4194
    }
}
```

---

#### GET `/api/school/listSchools`

![GET](https://img.shields.io/badge/GET-61affe?style=flat-square)
![Auth](https://img.shields.io/badge/Auth-None-lightgrey?style=flat-square)
![Query](https://img.shields.io/badge/Params-Query-blueviolet?style=flat-square)

Query parameters:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `latitude` | `number` | Yes | User's current latitude |
| `longitude` | `number` | Yes | User's current longitude |

Example request:

```
GET /api/school/listSchools?latitude=37.7749&longitude=-122.4194
```

Success response `200 OK`:

```json
{
    "success": true,
    "message": "Schools listed successfully",
    "data": [
        {
            "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
            "name": "Springfield Elementary",
            "address": "123 Main Street, Springfield",
            "latitude": 37.7749,
            "longitude": -122.4194
        }
    ]
}
```

Schools are returned sorted by distance (nearest first) from the provided coordinates using the Haversine formula.

---

## Getting Started

### Prerequisites

![Node](https://img.shields.io/badge/Node.js->=18-339933?style=flat-square&logo=nodedotjs)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL->=14-4169E1?style=flat-square&logo=postgresql&logoColor=white)

### Installation

```bash
npm install
```

### Environment Setup

Copy the example env file and fill in your values:

```bash
cp .env.example .env
```

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `PORT` | Port the server listens on (default: `3000`) |
| `NODE_ENV` | Environment (`development` / `production`) |

### Database Setup

```bash
npx prisma migrate deploy
npx prisma generate
```

### Scripts

| Script | Command | Description |
|---|---|---|
| ![Dev](https://img.shields.io/badge/dev-blue?style=flat-square) | `npm run dev` | Start dev server with hot reload |
| ![Build](https://img.shields.io/badge/build-orange?style=flat-square) | `npm run build` | Compile TypeScript to `dist/` |
| ![Start](https://img.shields.io/badge/start-green?style=flat-square) | `npm run start` | Run compiled production build |
| ![Format](https://img.shields.io/badge/format-F7B93E?style=flat-square) | `npm run format` | Format all files with Prettier |

---

## Database Schema

```prisma
model School {
    id        String @id @default(uuid())
    name      String
    address   String
    latitude  Float
    longitude Float
}
```

---

<div align="center">

![Built with](https://img.shields.io/badge/Built_with-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Powered by](https://img.shields.io/badge/Powered_by-Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Database](https://img.shields.io/badge/Database-PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)

</div>
