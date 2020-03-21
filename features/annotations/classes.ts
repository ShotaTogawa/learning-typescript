class Vehicle {
  constructor(public color: string) {}
  protected honk(): void {
    console.log('beep');
  }
}

class Bike extends Vehicle {
  //   constructor(public color: string) {
  //     super();
  //   }
  // 親が持っているmethodを再定義することをoverride
  private drive(): void {
    console.log('vroom');
  }

  turn(): void {
    console.log('turn');
  }

  startDrivingProcess(): void {
    // privateはclass内でのみ呼び出せる
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('red');
// vehicle.drive(); errorになる
// vehicle.honk(); errorになる
const bike = new Bike('red');
console.log(bike.color);
bike.turn();
