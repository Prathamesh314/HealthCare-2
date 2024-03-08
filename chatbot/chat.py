import os
from dotenv import dotenv_values
import openai
from langchain_openai import ChatOpenAI


config = dotenv_values(".env.local")

openai.api_key = config["OPENAI_API_KEY"]

# print(os.getenv("SECRET_KEY"))

# print("We are building Langchain")

llm = ChatOpenAI()
response = llm.invoke("What is the capital of India?")
print(response.content)
