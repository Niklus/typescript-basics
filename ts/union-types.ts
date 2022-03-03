let myName: string | null = null;

myName = "Nicholas";

function addShipping(price: number, shipping: number): number | boolean {
  return price + shipping;
}

addShipping(10, 9);
