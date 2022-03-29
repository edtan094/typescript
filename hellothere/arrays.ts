const arr: number[] = []
arr.push(1);
arr.push(5);

const arr2: string[] = []
arr2.push("hello");
arr2.push("there");


const arr3: Person[] = [] //Person is from objects.ts
arr3.push(person2) // person2 is from objects.ts
arr3.push(person) //person if from objects.ts


type List = [number, string, boolean]
const arr4: List = [1, "24", true]


type MyList = [number?, string?, boolean?]
const arr5: MyList = []
arr5.push(1)
arr5.push("24")
arr5.push(true)
