from typing import Union

from fastapi import FastAPI

import databaseRef

# from crud import setup_database

import uvicorn

app = FastAPI()

@app.get("/")
def read_root():
    databaseRef.create_database()  # Call the function to create the database
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8080)