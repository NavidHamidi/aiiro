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
docker compose up
```

Then, go to localhost:3000 and ask questions to AI.
