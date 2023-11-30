// //qn1:for the given Jshon iterate all loops(for,for in,for of)
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload=function(){
    var data=request.response;
    var result= JSON.parse(data);
    console.log(result);

    //for:
for(var i=0;i<result.length;i++){
   console.log(result[i].area)
}
//for in:
for(let key in result){
    console.log(result[key].region)
}


//for of:
for(let value of result){
    console.log(value.population);
}
};

// //resume data in JSON format:

let myResume={
    "basics": {
      "name": "HRITHIK S",
      "email": "hrithiksaravanan18@gamil.com",
      "phone": 8838479916,
      "degree": "MCA",
      "location": {
        "address": "B8208-Creation valencia,egattur",
        "postalCode": 600130,
        "city": "Chennai",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
          "github":"https://github.com/Hrithik1626"
        }
      ]
    },
    "work": [
      {
        "company": "Kashivv infotech",
        "position": "INTERNSHIP(Frontend Development)",
        "startDate": "2021-02-01",
        "endDate": "2021-05-01",
        "summary": "i had some kowledge in handling various task and gaining lots of experience",
      },
    ],
    "education": [
      {
        "institution": "CMS college of science and commerce",
        "department": "Computer Application",
        "studyType": "fulltime",
        "batch start year": 2021,
        "batch end year": 2023,
        "gpa": 8.1,
      }
    ],
    "skills": [
      {
        "name": "Html,css,javascript,bootstrap",
        "level": "beginner",
        "project": [
          "online pharmacy store in MERN Fullstack"
        ]
      }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish",
      }
    ],
    "interests": [
      {
        "name": "gym,movies,",
      }
    ]
  }
  console.log(myResume);
  