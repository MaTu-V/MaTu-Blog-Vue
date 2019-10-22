<template>
    <div class="notes">
      <h2 class="notes-title">Java集合(Set,List,Queue)</h2>
      <Row  class="code-row-bg" type="flex" justify="start" :gutter="16">
        <Col :xs="24" :md="4"><strong> 作者：</strong> V </Col>
        <Col :xs="24" :md="4"><strong> 分类: </strong> Java</Col>
        <Col :xs="24" :md="5"><strong> 标签：</strong> <span  class="bl-label" :style="'background:'+ articleList.labelColor">{{articleList.label}}</span></Col>
        <Col :xs="24" :md="8" class="bl-nowrap"><strong> 发布时间：</strong> <Icon type="md-time" size="20"/>&nbsp;&nbsp;{{articleList.time}}</Col>
      </Row>
      <Divider></Divider>
      <div class="content bl-text-indent">
        只有忍受别人不能忍受的忍受
        才能享受别人不能享受的享受

        匿名内部类和lambda表达式
        匿名内部类
        匿名内部类只适合创建那种只需要一个使用的类，创建匿名内部类时会立即创建一个该类的实例。

        格式
        new 实现接口() | 父类构造器(实参列表){
        // 匿名内部类的类体部分
        }
        匿名内部类规则
        匿名内部类不能是抽象类，因为系统在创建匿名内部类时，会立即创建匿名内部类对象。因此不允许匿名内部类定义为抽象类。
        匿名内部类不能定义构造器，因为匿名内部类没有类名，所以无法定义构造器，但匿名内部类可以定义初始化块，可以通过实例初始化块来完成构造器需要完成的事情。
        匿名内部类必须实现它的抽象父类或者接口里包含的所有抽象方法。
        匿名内部类可以重写父类中的普通方法。
        lambda表达式
        lambda表达式的主要作用就是代替匿名内部类的繁琐方法。

        lambda表达式的组成成分
        形参列表。形参列表允许省略形参类型。如果形参列表中只有一个参数，甚至连参数列表的圆括号也可以省略。
        箭头(->)。必须通过英文中画线号和大于符号组成。
        代码块。如果代码块只包含一条语句，lambda表达式允许省略代码块的花括号，那么这条语句就不要用花括号表示语句结束。lambda代码块只有一条return的语句，甚至可以省略return关键字。lambda表达式需要返回值，而它的代码块中仅有一条省略了return的语句，lambda表达式会自动返回这条语句的值。
        lambda表达式与匿名内部类的区别和联系
        lambda表达式是匿名内部类的一种简化，因此它可以部分取代匿名内部类的作用，lambda表达式与匿名内部类存在如下相同点。

        lambda表达式与匿名内部类一样，都可以直接访问”effectively final”的局部变量，以及外部类的成员变量(包括实例变量和类变量)
        lambda表达式创建的对象与匿名内部类生成的对象一样，都可以直接调用从接口中继承的默认方法。
        eg:

        @FunctionalInterface
        interface Displayable{
        // 定义一个抽象方法
        void display();
        // 定义一个默认方法
        default int add(int a, int b){
        return a + b;
        }
        }
        public class LambdaAndInner{
        private int age = 12;
        private static String name = "疯狂Java";
        public void test(){
        String book = "Java劝退师";
        Displayable dis = () -> {
        System.out.println("book的局部变量" + book);
        System.out.println("外部类的age实例变量" + age);
        System.out.println("外部类的name类变量" + name);
        }
        dis.display();
        // 调用dis对象从接口中继承的add()方法
        System.out.println(dis.add(1, 2));
        }
        public static void main(String[] args){
        LambdaAndInner lambda = new LambdaAndInner();
        lambda.test();
        }
        }
        上述代码分别访问了”effectively final”的局部变量，外部类的实例变量和类变量。
        与内部类相似的是，由于lambda表达式访问了book局部变量，因此该局部变量相当于有一个隐式的final修饰，因此同样不允许对book局部变量重写赋值。

        区别
        匿名内部类可以为任意接口创建实例——-不管接口包含多少个抽象方法，只要匿名内部类实现所有的抽象方法即可，但lambda表达式只能为函数式接口创建实例。
        匿名内部类可以为抽象类甚至普通类创建实例；但lambda表达式只能为函数式接口创建实例。
        匿名内部类实现的抽象方法的方法体允许调用接口中定义的默认方法，但lambda表达式的代码块不允许调用接口中定义的默认方法。
        抽象类和接口
        抽象类
        抽象方法和抽象类必须使用abstract修饰符来定义，有抽象方法的类只能被定义为抽象类，抽象类里可以没有抽象方法。
        抽象类和抽象方法的规则：

        抽象类必须使用abstract修饰符来修饰，抽象方法也必须使用abstract修饰符来修饰，抽象方法不能有方法体。
        抽象类不能实例化，无法使用new关键字来调用抽象类的构造器创建抽象类的实例。即使抽象类里不包含抽象方法，这个抽象类也不能创建实例。
        抽象类可以包含成员变量，方法(普通方法和抽象方法都可以)，构造器，初始化块，内部类(接口，枚举)5中成分，抽象类的构造器不能用于创建实例，主要用于被其子类调用。
        抽象类不能用于创建实例，只能当作父类被其他子类继承。
        当使用abstract修饰类时，表明这个类只能被继承；当使用abstract修饰方法时，表明这个方法必须由子类提供实现(重写).而final修饰的类不能被继承，final修饰的方法不能被重写。因此final和abstract永远不能同时使用。
        static和abstract不能同时修饰某个方法，即没有所谓的类抽象方法。
        抽象类的作用
        抽象类是从多个具体类中抽取出来的父类，以这个抽象类作为其子类的模板，从而避免了子类设计的随意性。
        如果编写一个抽象父类，父类提供了多个子类的通用方法，并把一个或多个方法留给其子类实现，这就是一种模板模式，模板模式也是十分常见且简单的设计模式之一。
        接口
        接口基本语法
        [修饰符] interface 接口名 extend 父接口1, 父接口2...{
        零个或多个常量定义
        零个或多个抽象方法定义
        零个或多个内部类,接口,枚举定义
        零个或多个默认方法或类方法定义
        }
        注意

        一个接口可以继承多个接口，但一个类只能继承一个父类
        由于接口定义的是一种规范，因此接口里不能包含构造器和初始化块。
        接口种包含成员变量(只能是静态变量),方法(只能是抽象方法，类方法或默认方法)，内部类（包括内部接口，枚举）定义。
        默认方法必须使用default修饰，该方法不能使用static修饰。
        使用接口种的默认方法时，需要使用接口的实现类的实例来调用这些默认方法。
        类方法可以直接调用接口来使用。
        一个类可以继承一个类，并同时实现多个接口，implements部分必须放在extends部分之后。
      </div>
      <Divider></Divider>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          articleList: {
            id:'11231233',
            articleUrl: 'https://uploads-ssl.webflow.com/5bff8886c3964a992e90d465/5bff98f85ea7faf86504605e_scenes.gif',
            label: 'SpringBoot',
            labelColor:"#21D4FD",
            title:'Java集合(Set,List,Queue)',
            time:'2019-10-5',
            content:"Collection体系里的集合图1.0Collection集合体系的继承树其中，Set，List是Collection接口派生的两个接口，他们分别代表了无序集合和有序集合；Queue是Java提供的队列实现，有点类似于list。Set集合Set集合不允许包括相同的元素，如果试图把两个相同的元素添加Set集合中，则添加失败。HashSet类HashSet类是Set集合的实现类，它通过hash...",
            userAvatar:"https://i.loli.net/2017/08/21/599a521472424.jpg",
            viewsCounts:"99",
            commentCounts:"99",
            enjoyCounts:"99",
          }
        }
      }
    }
</script>

<style lang="scss" scoped>
  .notes{
    padding: 20px 30px;
    height: auto;
    background: white;
    .notes-title{
      padding-bottom: 5px;
    }
  }
</style>
