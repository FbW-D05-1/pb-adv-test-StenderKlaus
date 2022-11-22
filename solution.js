function divider(arg) {
    const line = `\n ${"-".repeat(15)} ${arg} ${"-".repeat(15)} \n`;
    console.log(line);
  }
  divider("---------- Solution 01 & 02 ----------");
  const profileData = {
    firstname: 'John',
    lastname: 'Smith',
    age: 20,
    city: `Hamburg`,

    detail: function(){
    return `${this.firstname} ${this.lastname} is ${this.age} years old, and lives in ${this.city}`;
    }
}
console.log(profileData.detail());


divider("---------- Solution 03 ----------");
let adjectives = ["smart", "kind", "sweet", "small", "clear"];

const wordConverter = (words, suffix) => {
  return words.map((word) => word + suffix);
};

console.log(wordConverter(adjectives, "er"));


divider("---------- Solution 04 ----------");

const hourTracking = [
    { day: 'Monday', start: 8, end: 17},
    { day: 'Tuesday', start: 9, end: 15},
    { day: 'Wednesday', start: 10, end: 18},
    { day: 'Thursday', start: 7, end: 14},
    { day: 'Friday', start: 6, end: 12},
];

const calculateHours = (hours) => {
    return hours.reduce((acc, cur)=>{
    return acc += cur.end - cur.start;
    },0)

}
console.log(calculateHours(hourTracking));

divider("---------- Solution 05 ----------");

class Course {
    constructor(teacher, type, number){
        this.teacher = teacher;
        this.type = type;
        this.number = number;
    }
    spaceNeeded =  () => {
        return `Needed Space is ${this.number * 2}m².`
    }
    details = () => {
        return `This is a ${this.type}-Course, taught by ${this.teacher}. There are ${this.number} students taking the course.`;
    }
}

let webFBW0522 = new Course("Ari Razab", "WebDev", 22);
console.log(webFBW0522.details());


divider("---------- Solution 06 ----------");

function validPin(pin) {
    for (const char of pin) {
        if (Number.isNaN(Number(char))) {
        return false;
        }
    }
        if (pin.length !== 4) {
        return false;
    }
        if (pin[pin.length - 1] % 2 !== 0) {
        return false;
    }
        if (pin[0] === pin[pin.length - 1]) {
        return false;
    }

        return true;
}

console.log(validPin("1234"))
console.log(validPin("1235"))
console.log(validPin("12ww"))
console.log(validPin("12345"))
console.log(validPin("2222"))
console.log(validPin("2224"))
