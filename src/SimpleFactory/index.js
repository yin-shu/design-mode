/**
 * 简单工厂模式
 */
// 具体产品一
var ConcreteProduct1 = /** @class */ (function () {
    function ConcreteProduct1() {
        this.name = '产品1';
    }
    return ConcreteProduct1;
}());
// 具体产品二
var ConcreteProduct2 = /** @class */ (function () {
    function ConcreteProduct2() {
        this.name = '产品2';
    }
    return ConcreteProduct2;
}());
// 简单工厂
var SimpleFactory = /** @class */ (function () {
    function SimpleFactory() {
    }
    SimpleFactory.createProduct = function (type) {
        var product = null;
        if (type === 1) {
            product = new ConcreteProduct1();
        }
        else if (type === 2) {
            product = new ConcreteProduct2();
        }
        return product;
    };
    return SimpleFactory;
}());
// 使用
var product = SimpleFactory.createProduct(1);
var product2 = SimpleFactory.createProduct(2);
console.log(product);
console.log(product2);
