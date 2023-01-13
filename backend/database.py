from model import User

import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017')

database = client.Users #?

collection = database.user #?

async def get_one_user(email):
    info = await collection.find_one