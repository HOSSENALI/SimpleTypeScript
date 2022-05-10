export {};
// let NewMessage: string = 'Hello, TypeScript!';
// let Number:number=67;
// let heading = window.document.createElement('h1');
// heading.textContent = NewMessage;
// console.log(Number);
// document.body.appendChild(heading);
interface Product{
    id: number,
    name: string,
    price: number
};
function getProduct(id:number) : Product{
    return {
      id: id,
      name: `Awesome Gadget ${id}`,
      price: 99.5
    }
  };
const showProduct = (name: string, price:number)  => {
console.log(`The product ${name} costs ${price}$.`);
  };
const product = getProduct(6);
showProduct(product.name, product.price);