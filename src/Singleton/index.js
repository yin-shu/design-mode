/**
 * 单例模式
 */
// 饿汉式
var Singleton = /** @class */ (function () {
    // 1. 构造器私有化，外部不能new
    function Singleton() {
        this.name = '';
    }
    // 3. 提供一个公有的静态方法，返回实例对象
    Singleton.getInstance = function () {
        return this.instance;
    };
    // 2. 本类内部创建对象实例化
    Singleton.instance = new Singleton();
    return Singleton;
}());
console.log(Singleton.getInstance());
// 懒汉式
var Singleton2 = /** @class */ (function () {
    function Singleton2() {
    }
    Singleton2.getInstance = function () {
        if (this.instance === null) {
            this.instance = new Singleton2();
        }
        return this.instance;
    };
    Singleton2.instance = null;
    return Singleton2;
}());
console.log(Singleton2.getInstance(), '2222');
