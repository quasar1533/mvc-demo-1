```
parcel src/index.html
```

## demo介绍： 
• 使用git的不同分支代表了每一次的改进与优化

1. main分支（version1）  不适用mvc结构的原始代码

2. v2分支（Version2） 使用了mvc结构的基本雏形，  m、v、c 三大抽象模块
3. v3分支    初步优化，使得render（data）单向进行
4. v4分支    使用最小知识原则，尽量简化、模块间去耦；采用表驱动编程方式及事件委托来绑定事件，将事件绑定于容器之上，防止每次渲染刷新掉；用es6模块导出接口
5. v5分支    使用EventBus方法，在window对象上建立m与c之间的事件发布与监听。完善mvc结构，简化代码；将同样的结构应用至app2模块（新的形式☆，不用localStorage，而使用HTML标签的data-xxx属性）。
6. v6分支    引用一些现代框架的思想将  view 与controller模块合并 为view。 更加方便。（app1与app2）
7. v7分支    使用ES6的类 封装mvc框架对象，使得可复用。（添加框架文件夹base）
8. v8分支    将eventBus封装为类，充当中间层（胶水层）（这在代码要变更依赖库时非常有效）；将View 与 Model继承EventBus类，实现更进一步的抽象封装。
9. v9分支    引入成熟的框架Vue，可以将前端MVC模式，做到很极致的简化。