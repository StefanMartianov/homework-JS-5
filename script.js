const numbers = document.querySelector(".number");
const container = document.querySelector(".strings_container");
const words = ["Stefan", "Vladislav", "Ivan"];
const usersContainer = document.querySelector(".users_container");
const users = [
  {
    first_name: "Имя",
    last_name: "Фамилия",
    age: 6,
  },
  {
    first_name: "Имя",
    last_name: "Фамилия",
    age: 18,
  },
  {
    first_name: "Имя",
    last_name: "Фамилия",
    age: 23,
  },
];

for (let i = 0; i < users.length; i++) {
    const userCard = document.createElement("div")
    const fullName = document.createElement("h2")
    const age = document.createElement("p")
    
    fullName.innerText = users[i].first_name + " " + users[i].last_name 
    age.innerText = users[i].age
    userCard.append(fullName , age)
    if (users[i].age >= 18) {
        usersContainer.append(userCard)  
    }
}



for (let i = 100; i >= 50; i = i - 10) {
  const paragraph = document.createElement("p");
  paragraph.innerText = i + "";
  numbers.append(paragraph);
}

for (let i = 0; i < words.length; i++) {
  const paragraph = document.createElement("p");
  paragraph.innerText = words[i];
  container.append(paragraph);
}
