from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
#from model import User
import database

app = FastAPI()

origins = ['https://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

testDB = [
    {
        "email" : "test@example.com",
        "skins" : ["Medieval Twitch", "Grey Warwick"]
    },
    {
        "email" : "user@example.com",
        "skins" : ["Star Guardian Syndra"]
    }
]

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/user/{user_email}")
def read_user(user_email: str):
    for user in testDB:
        if user["email"] == user_email:
            return user
    return "Not Found"

@app.get("/users")
def read_users():
    return testDB

@app.post("/user/{user_email}")
def add_user(user_email: str):
    testDB.append({"email":user_email, "skins":[]})

@app.post("skin/{skin}")
def add_skin(skin: str, user_email: str):
    for user in testDB:
        if user["email"] == user_email:
            user["skins"].append(skin)

