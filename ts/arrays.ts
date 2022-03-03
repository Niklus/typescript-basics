const itemsOne: string[] = ["Nick", "Maria"];

const itemsTwo: any[] = ["Nick", 1, true, null, undefined];

console.log([...itemsOne, ...itemsTwo]);
