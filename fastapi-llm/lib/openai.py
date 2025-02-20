from openai import OpenAI
from dotenv import dotenv_values

config = dotenv_values(".env")

client = OpenAI(api_key=config.get("OPENAI_API_KEY"))


def generate_completion(prompt: str):
    messages = [
        {
            "role": "user",
            "content": prompt,
        }
    ]
    response = client.chat.completions.create(model="gpt-4o-mini", messages=messages)

    result = ""
    for choice in response.choices:
        msg = choice.message.content
        result += msg

    return result
