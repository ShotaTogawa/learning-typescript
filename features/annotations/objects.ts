const profile = {
  age: 20,
  username: 'alex',
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { username, age }: { username: string; age: number } = profile;
const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;
