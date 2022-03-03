function MenuItem(itemID: string) {
  return (target: Function) => {
    target.prototype.id = itemID;
  };
}

@MenuItem("kebab")
class Pizza {
  id: string;
}

@MenuItem("chicken")
class Humburger {
  id: string;
}

console.log(new Pizza().id);
console.log(new Humburger().id);
