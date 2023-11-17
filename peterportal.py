from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List,Optional


app = FastAPI()
import requests
responseSummer = requests.get("https://api.peterportal.org/rest/v0/schedule/soc?term=2023%20Summer10wk&department=COMPSCI")
responseFall = requests.get("https://api.peterportal.org/rest/v0/schedule/soc?term=2023%20Fall&department=COMPSCI")
responseWinter = requests.get("https://api.peterportal.org/rest/v0/schedule/soc?term=2023%20Winter&department=COMPSCI")
responseSpring = requests.get("https://api.peterportal.org/rest/v0/schedule/soc?term=2023%20Spring&department=COMPSCI")
courses = requests.get("https://api.peterportal.org/rest/v0/courses/all").json()
summer = responseSummer.json()
fall = responseFall.json()
winter = responseWinter.json()
spring = responseSpring.json()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class FormData(BaseModel):
    term1: str
    year1: str
    units: str
    term2: str
    year2: str
    minor: str
    text_area: List[Optional[List[Optional[str]]]] = [ [] ]  # Initialize with an empty list of Optional[str]
    specialization: str
    summertogle: str

lowerdiv = ["I&C SCI 31","I&C SCI 6B","MATH 2A","MATH 2B","I&C SCI 32","I&C SCI 6N","I&C SCI 6D","I&C SCI 33","IN4MATIX 43", "I&C SCI 6N","STATS 67", "I&C SCI 45C", "I&C SCI 46" , "I&C SCI 51", "I&C SCI 53"]
upperdivA = ["COMPSCI 161","I&C SCI 139W"]
upperdivB = [
    "COMPSCI 103", "COMPSCI 104", "COMPSCI 105", "COMPSCI 106", "COMPSCI 107",
    "COMPSCI 108", "COMPSCI 109", "COMPSCI 110", "COMPSCI 111", "COMPSCI 112",
    "COMPSCI 113", "COMPSCI 114", "COMPSCI 117", "COMPSCI 118", "COMPSCI 122B",
    "COMPSCI 122C", "COMPSCI 122D", "COMPSCI 125", "COMPSCI 133", "COMPSCI 142B",
    "COMPSCI 143B", "COMPSCI 145", "COMPSCI 147", "COMPSCI 153", "COMPSCI 154",
    "COMPSCI 165", "COMPSCI 175", "COMPSCI 180A", "COMPSCI 180B", "COMPSCI 189",
    "IN4MATX 102", "IN4MATX 113", "IN4MATX 115", "IN4MATX 117", "IN4MATX 121",
    "IN4MATX 122", "IN4MATX 124", "IN4MATX 131", "IN4MATX 133", "IN4MATX 134",
    "I&C SCI 162"
]
Algorithms = ["COMPSCI 162", "COMPSCI 163", "COMPSCI 164", "COMPSCI 165", "COMPSCI 166", "COMPSCI 167", "COMPSCI 169"]
Architecture = ["COMPSCI 145", "COMPSCI 147", "COMPSCI 151", "COMPSCI 152","COMPSCI 153","COMPSCI 154"]
BioInformatics = []
@app.post("/course-management")
async def course_management(data: FormData):
    # Access the form data  
    print(data)
    finalList = data.text_area
    for index in range(20):
        if len(finalList) - index <= 0:
            finalList.append([])
        if finalList[index] == None:
            finalList[index] = []
    for index, term in enumerate(finalList):
        for element in term:
            for classes in courses:
                if element.replace(" ", "") == classes["id"]:
                    for prereqs in classes["prerequisite_for"]:
                        if prereqs in lowerdiv:
                            finalList[index+1].append(prereqs)
                    
    for index in range(20):
        for i in range(5):
            if len(finalList[index]) < 5:
                 finalList[index].append('')
    print(finalList)
    return {"message": finalList}
