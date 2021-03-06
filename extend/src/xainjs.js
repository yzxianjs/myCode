function $() {
}

$.fn = $.prototype = {
  constructor: $,
  version: '3.1415926',
  init: function () {
  },
  size: function () {
    return this.length;
  },

  //调用数组原型上的sort和splice方法
  sort: [].sort,
  splice: [].splice

}
// $.fn.init.prototype也能实例化一个jQuery对象的对象了
$.fn.init.prototype = $.fn;

//extend实现jQuery对象的扩展
/**
 * 静态的方法和在原型上扩展方法
 * @type {$.extend}
 */
$.extend = $.fn.extend = function () {
  var target = arguments[0] || {};//被扩展的对象为第一个参数,默认值为空对象
  var
    options,//当前正在拷贝的扩展对象的引用
    name,
    src,
    copy,
    copyIsArray,
    clone,
    i = 1,
    length = arguments.length,//参数长度,通过参数的长度判断扩展的模式
    deep = false;//判断是否深度克隆

};
