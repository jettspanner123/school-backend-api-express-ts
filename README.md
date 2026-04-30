<div align="center">

# Express TypeScript Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)

![License](https://img.shields.io/badge/License__ISC-8B5CF6?style=for-the-badge)
![Version](https://img.shields.io/badge/Version__1.0.0-2563EB?style=for-the-badge)
![Status](https://img.shields.io/badge/Status__Active-16A34A?style=for-the-badge)
![PRs Welcome](https://img.shields.io/badge/PRs__Welcome-EC4899?style=for-the-badge)
![Deployed](https://img.shields.io/badge/Deployed__on__Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)

A clean, production-ready REST API scaffold built with Node.js, TypeScript, Express, Prisma ORM, and PostgreSQL.

**Live Base URL:** `https://school-backend-yv0t.onrender.com/api`

</div>

---

## Live Deployment

![Render](https://img.shields.io/badge/Hosted__on__Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)

This backend is deployed and publicly accessible at:

```
https://school-backend-yv0t.onrender.com
```

| Endpoint | Full URL |
|---|---|
| `GET /api/` | https://school-backend-yv0t.onrender.com/api/ |
| `POST /api/school/addSchool` | https://school-backend-yv0t.onrender.com/api/school/addSchool |
| `GET /api/school/listSchools` | https://school-backend-yv0t.onrender.com/api/school/listSchools |

---

## Tech Stack

| Layer | Technology |
|---|---|
| ![Runtime](https://img.shields.io/badge/Runtime__Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) | JavaScript runtime built on V8 |
| ![Language](https://img.shields.io/badge/Language__TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) | Strongly typed superset of JavaScript |
| ![Framework](https://img.shields.io/badge/Framework__Express__v5-000000?style=for-the-badge&logo=express&logoColor=white) | Fast, minimalist web framework |
| ![Database](https://img.shields.io/badge/Database__PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white) | Relational database |
| ![ORM](https://img.shields.io/badge/ORM__Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white) | Next-generation Node.js ORM with TypedSQL |
| ![Validation](https://img.shields.io/badge/Validation__Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white) | Schema-first TypeScript validation |
| ![Formatter](https://img.shields.io/badge/Formatter__Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black) | Opinionated code formatter |
| ![Hosting](https://img.shields.io/badge/Hosting__Render-46E3B7?style=for-the-badge&logo=render&logoColor=black) | Cloud hosting platform |

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

All routes are prefixed with `/api`. The live base URL is `https://school-backend-yv0t.onrender.com`.

### ![App Routes](https://img.shields.io/badge/App__Routes-6366F1?style=for-the-badge)

| Method | Endpoint | Live URL | Description |
|---|---|---|---|
| ![GET](https://img.shields.io/badge/GET-2563EB?style=for-the-badge) | `/api/` | https://school-backend-yv0t.onrender.com/api/ | Returns API health and info |

#### Response

```json
{
    "success": true,
    "message": "API is ready",
    "data": {}
}
```

---

### ![School Routes](https://img.shields.io/badge/School__Routes-059669?style=for-the-badge)

| Method | Endpoint | Live URL | Description |
|---|---|---|---|
| ![POST](https://img.shields.io/badge/POST-16A34A?style=for-the-badge) | `/api/school/addSchool` | https://school-backend-yv0t.onrender.com/api/school/addSchool | Add a new school to the database |
| ![GET](https://img.shields.io/badge/GET-2563EB?style=for-the-badge) | `/api/school/listSchools` | https://school-backend-yv0t.onrender.com/api/school/listSchools | List all schools sorted by distance |

---

#### POST `/api/school/addSchool`

![POST](https://img.shields.io/badge/POST-16A34A?style=for-the-badge)
![Body JSON](https://img.shields.io/badge/Body__JSON-EA580C?style=for-the-badge)
![Auth None](https://img.shields.io/badge/Auth__None-DC2626?style=for-the-badge)

**Live URL:** `https://school-backend-yv0t.onrender.com/api/school/addSchool`

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

![GET](https://img.shields.io/badge/GET-2563EB?style=for-the-badge)
![Params Query](https://img.shields.io/badge/Params__Query-7C3AED?style=for-the-badge)
![Auth None](https://img.shields.io/badge/Auth__None-DC2626?style=for-the-badge)

**Live URL:** `https://school-backend-yv0t.onrender.com/api/school/listSchools`

Query parameters:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `latitude` | `number` | ![Required](https://img.shields.io/badge/Required-16A34A?style=for-the-badge) | User's current latitude |
| `longitude` | `number` | ![Required](https://img.shields.io/badge/Required-16A34A?style=for-the-badge) | User's current longitude |

Example request:

```
GET https://school-backend-yv0t.onrender.com/api/school/listSchools?latitude=37.7749&longitude=-122.4194
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

![Node.js >= 18](https://img.shields.io/badge/Node.js__>=__18-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![PostgreSQL >= 14](https://img.shields.io/badge/PostgreSQL__>=__14-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)

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
| ![npm run dev](https://img.shields.io/badge/npm__run__dev-2563EB?style=for-the-badge) | `npm run dev` | Start dev server with hot reload |
| ![npm run build](https://img.shields.io/badge/npm__run__build-EA580C?style=for-the-badge) | `npm run build` | Compile TypeScript to `dist/` |
| ![npm run start](https://img.shields.io/badge/npm__run__start-16A34A?style=for-the-badge) | `npm run start` | Run compiled production build |
| ![npm run format](https://img.shields.io/badge/npm__run__format-F7B93E?style=for-the-badge&logoColor=black) | `npm run format` | Format all files with Prettier |

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

![Built with TypeScript](https://img.shields.io/badge/Built__with__TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Powered by Express](https://img.shields.io/badge/Powered__by__Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Database PostgreSQL](https://img.shields.io/badge/Database__PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Deployed on Render](https://img.shields.io/badge/Deployed__on__Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)

</div>
