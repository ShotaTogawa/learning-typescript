import { NumbersCollection } from './NumberCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumbersCollection([10, 3, -5, 0]);
numberCollection.sort();
// const sorter = new Sorter(numberCollection);
// sorter.sort();
console.log(numberCollection.data);

const stringCollection = new CharactersCollection('banana');
stringCollection.sort();
// const strSort = new Sorter(stringCollection);
// strSort.sort();
console.log(stringCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

// const likedSorter = new Sorter(linkedList);
// likedSorter.sort();
linkedList.print();
