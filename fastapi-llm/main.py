from fastapi import FastAPI, HTTPException, Request
from models.PromptRequestModel import PromptRequest
from lib.openai import generate_completion

import os
import logging


# Logger
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()


@app.post("/generate")
async def generate(request: PromptRequest):
    try:
        response = generate_completion(request.prompt)
        logger.info(f"Response: {response}")
        return {"response": response}
    except Exception as e:
        logger.error(f"Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))
