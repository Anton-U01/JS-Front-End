function cats(arr){
    let cats = {};
    class Cat {
        constructor(name,age){
            this.name = name;
            this.age = age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (const e of arr) {
        let [name,age] = e.split(" ");
        let cat = new Cat(name,age);
        cat.meow();
    }
}
cats(['Mellow 2', 'Tom 5']);