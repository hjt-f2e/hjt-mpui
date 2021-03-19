# BusiImageLoader

# 图片懒加载组件
优化页面图片加载性能，实现图片懒加载

## 使用方式
```javascript
import ImageLoader from '@hjtui/mpui/components/BusiImageLoader/BusiImageLoader.vue';
export default {
    components: {
        BusiImageLoader
    }
};
```
```html
<BusiImageLoader
    mode="aspectFill"
    :source="图片地址"
    :styles="{
        width: '100%',
        height: '100%'
    }"
/>
```

## Props

<!-- @hjtvuese:BusiImageLoader:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|source|资源路径|`String`|`false`|-|
|styles|资源样式|`Object`|`false`|{}|
|mode|图片加载模式|`String`|`false`|aspectFill|
|defaultImage|默认占位图|`String`|`false`|https://imgcdn.huanjutang.com/assets/img/20212231125168081.jpeg|
|distance|加载资源时距离屏幕的高度（最好是资源高度的一倍及以上）|`Number`|`false`|-|

<!-- @hjtvuese:BusiImageLoader:props:end -->


