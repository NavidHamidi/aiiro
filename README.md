# Aiiro

Simple microservice architecture using:

- **FastAPI**: LLM service using OpenAI API.
- **NestJS**: Backend service that calls FastAPI.
- **Next.js**: Frontend with a simple form.

## Setup

In the fastapi-llm folder, rename _.env.example_ to .env and fill your OpenAI API key.

Docker and Docker compose must be installed.

Then, run

```bash
docker compose up or docker-compose up --build
```

Then, go to localhost:3000 on your browser and ask questions to AI.

## My approach

I created a Dockerfile for each project.
So that, each project has their own environment and can be scaled or modified wih no side effect the others.

Each container has his environment file that will be used in production. Local envs files can be used without modifying the code.

Containers communicates between them using bridge network.
