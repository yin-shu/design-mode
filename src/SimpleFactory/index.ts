/**
 * 简单工厂模式
 */

// 抽象产品接口
interface Product{}
// 具体产品一
class ConcreteProduct1 implements Product {
    constructor(){}
    public name: string = '产品1'
}
// 具体产品二
class ConcreteProduct2 implements Product {
    constructor(){}
    public name: string = '产品2'
}
// 简单工厂
class SimpleFactory {
    public static createProduct(type : number) : Product {
        let product = null;
        if (type === 1) {
            product = new ConcreteProduct1();
        } else if ( type === 2) {
            product = new ConcreteProduct2();
        }
        return product;
    }
}
// 使用
let product = SimpleFactory.createProduct(1);
let product2 = SimpleFactory.createProduct(2);
console.log(product);
// { name: '产品1' }
console.log(product2);
// { name: '产品2' }