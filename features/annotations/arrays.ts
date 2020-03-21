const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const car1 = carMakers[0];
const myCar = carMakers.pop();

// Prevent incomatiable values
// carMakers.push(100);

// Help with "map"
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (string | Date)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-10-10');
importantDates.push(new Date());
