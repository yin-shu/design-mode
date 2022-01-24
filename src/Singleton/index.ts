/**
 * 单例模式
 */
// 饿汉式
class Singleton {
  // 1. 构造器私有化，外部不能new
  private constructor(){}
  // 2. 本类内部创建对象实例化
  private static instance : Singleton = new Singleton();
  // 3. 提供一个公有的静态方法，返回实例对象
  public static getInstance() : Singleton {
      return this.instance;
  }
  private name: string = ''
}
console.log(Singleton.getInstance());


// 懒汉式
class Singleton2 {
  private constructor(){}
  private static instance: Singleton2 = null;
  public static getInstance() : Singleton2 {
      if (this.instance === null) {
          this.instance = new Singleton2();
      }
      return this.instance;
  }
}
console.log(Singleton2.getInstance())