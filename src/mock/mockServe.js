//引入mockjs模块,Mock是一个对象
import Mock from 'mockjs';
//引入json文件，json文件在webpack里都是默认暴露的，还有图片也是默认暴露的

import banner from './banner.json'
import floor from './floor.json'

//mock是一个方法：第一个参数为请求地址 第二个参数：请求数据
Mock.mock("/mock/banner",{code:200,data:banner});
Mock.mock("/mock/floor",{code:200, data:floor})
