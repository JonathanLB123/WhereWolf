const nameList = [];

nameList.push("jonathan");
nameList.push("Max");
nameList.push("Oscar");

for (var i = 0; i < nameList.length; i++){
    console.log(nameList[i] + " " + i);
}

class player{
    player(name, age){
        this.name = name;
        this.age = age;
    }
}