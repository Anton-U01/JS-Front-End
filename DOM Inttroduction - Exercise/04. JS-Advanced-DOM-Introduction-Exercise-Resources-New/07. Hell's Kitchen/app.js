function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let array = document.querySelector('textarea').value;
      array = JSON.parse(array);
      let output1 = document.querySelector('#bestRestaurant p');
      let output2 = document.querySelector('#workers p');
      let restaurants = [];
      for(const element of array){
         let info = element.split(' - ');
         let name = info[0];
         let workersInfo = info[1].split(', ');
         let workers = {};
         for(const info of workersInfo){
               let [workerName,salary] = info.split(' ');
               workers[workerName] = salary;
         }
         let restaurant = {};
         restaurant.name = name;
         restaurant.workers = workers;
         restaurants.push(restaurant);
      }
      let nameOfBest = '';
      let averageSalary = 0;
      let bestSalary = 0;
      for(const r of restaurants){
         let currentAvrgSum = 0;
         let currentBestSalary = 0;
         let countOfWorkers = 0;
         for(const [name,value] of Object.entries(r.workers)){
            countOfWorkers++;
            let salary = Number(value);
            currentAvrgSum += salary;
            if(salary > currentBestSalary){
               currentBestSalary = salary;
            }
         }
         currentAvrgSum /= countOfWorkers;
         if(currentAvrgSum > averageSalary){
            nameOfBest = r.name;
            averageSalary = currentAvrgSum;
            bestSalary = currentBestSalary;
         }
      }
      output1.textContent = `Name: ${nameOfBest} Average Salary: ${averageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;
      restaurants = restaurants.filter( r => r.name === nameOfBest);
      let result = ``;
      Object.keys(restaurants[0].workers).sort( (w1,w2) => {
         return Number(restaurants[0].workers[w2]) - Number(restaurants[0].workers[w1]);
      }).forEach(k => {
         result += `Name: ${k} With Salary: ${restaurants[0].workers[k]} `;
      });
      output2.textContent = result;
   }
}