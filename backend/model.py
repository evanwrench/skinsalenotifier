from pydantic import BaseModel
from typing import List

class User(BaseModel):
    email: str
    skins: List[str]