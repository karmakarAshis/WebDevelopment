const laptop = [
    { id: 1, name: 'lenovo', price: 55000 },
    { id: 2, name: 'dell', price: 45000 },
    { id: 3, name: 'hp', price: 40000 },
    { id: 4, name: 'apple', price: 155000 }
];

class Product{
    country = 'Bangladesh';
    constructor(name){
        this.name = name
    }
    speak(talk){
        console.log(`talking about ${talk}`);
    }
}

// const lenovo = new Product('lenovo');
// console.log(lenovo);
// lenovo.speak('kita kou');

class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('sir is teaching Math');
    }
}

const Tapon = new Teacher('Tapon sir', 'physics')
console.log(Tapon);