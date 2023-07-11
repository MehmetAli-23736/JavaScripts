
let users = [
    {
        "name": "Mustafa",
        "surname": "Soylu",
        "age": "21",
        "number": "0",
        "profession": "Computer Developer",
    },

    {
        "name": "Ahmet",
        "surname": "Yaşlı",
        "age": "19",
        "number": "1",
        "profession": "Web Developer",
    },

    {
        "name": "Nur",
        "surname": "Budak",
        "age": "16",
        "number": "2",
        "profession": "Computer Developer",
    },

    {
        "name": "Ali Rıza",
        "surname": "Mutlu",
        "age": "28",
        "number": "3",
        "profession": "Full-Stack Developer",
    },

    {
        "name": "Fatma",
        "surname": "Kaya",
        "age": "30",
        "number": "4",
        "profession": "Computer Developer",
    }
]

for(i=0; i<users.length; i++) {
    let data = users[i].name;
    console.log(data);
    let a = "Mustafa";

    if(data = a){

        console.log("UYUMLU");
        

    }else {
        console.log("UYUMSUZ")
    }

}