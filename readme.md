# 开发规范
1. 资源就近管理 (/src/modules2/views/Home.vue)
    > 每个模块管理自己模块的资源
    
    > 每个组件单独使用的资源可以放在当前组件的目录下
    
2. src/assets和src/components中的代码/资源要高度复用
    > 自己模块的专属代码/资源在自己模块管理
    
3. 每个模块就配置一个别名 (vue.config.js的chainWebpack属性)
    > 其余的通过(模块别名)或(整体别名)去找对应关系
    
4. css名的命名规范BEM (https://www.w3cplus.com/css/bem-definitions.html)
    
5. html元素的每一个属性值对以一行的形式书写(不要一行把所有属性值显示出来)

```vue
<li v-for="(item,index) in tmp"
    :key="index">
    {{item}}
</li>
```

6. router.js的引包方式如下

```
{
  path: '/about',
  name: 'about',
  component: () => import('./views/About.vue')
}
```

7. less的用法

```vue
@import "~assets/less/var.less"
```


8. 图片的引用

8.1 html
```
// 就近原则的图片
<img src="./logo.png">
// 放在公共home/模块modules下的assets
<img src="~modules/assets/img/logo.png">
```

8.2 js

```
// 第一种用法
<template>
    <img :src="img"> 
</template>
data(){
    return{
        img:require('assets/img/logo.ong')
    }
}
```

8.3 注意
```
// 出现下面的情况会报错，需要用js
<template>
    <div v-for="n in 2"
         :key="n>
        <img :src="`~assets/img/logo_${n}.png`">   
    </div>
</template>
```

9. 每个入口文件其实可以挂在(js方法/less样式)
    > 挂载见src/modules1/main.js
    
    > 使用见 src/modules1/views/Home.vue
 


# 目录介绍
- vue.config.js   webpack配置(多入口,别名)
- public  (不编译目录)
    - *.html  静态html文件(入口文件)
    - static  静态资源文件(此处的引用见public/module1.html的link)
        - css css文件
            - (此文件作用：有些样式比较难控制，可以在html文件引入*.css达到控制样式)
            - 配置这个模块的一些基本样式(重置)
            - 可以查看public/module1.html
        - dist 第三方库(不支持npm安装)
        - dll (暂无)
        - fonts 公共的字体图标
        - img 公共图片
            - 此处的图片不支持转换成database64
            - 如果小图可以放在/src/assets/img或模块目录下的assets/img
        - js 自定义js
- src 主开发目录
    - assets 公共资源目录
        - fonts 字体
        - img 
        - js 封装一些公共函数
            - ajax.js 发送axios请求
            - base_url.js 公共的路径
        - less 公共的less
            - var.less
            - mixins.less
            - reset.less
        - mixins 公共的vue混合
    - components 公共组件
    - modules1   模块1
        - assets 当前模块的资源目录
            - fonts 字体
            - img 
            - js 
                - url.js 这个模块的请求url
            - less 
            - mixins 这个模块的vue混合
        - components 这个模块1的组件
        - views 这个模块的页面
        - App.vue  主vue文件
        - main.js  主入口文件
        - router.js 路由
        - store.js  [vuex1]
        - store     [vuex2]
            - index.js
            - modules
            - getters.js
        




