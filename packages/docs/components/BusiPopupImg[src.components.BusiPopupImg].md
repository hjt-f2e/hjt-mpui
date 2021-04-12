# BusiPopupImg

# 开屏弹窗广告业务组件

> 根据广告数据展示开屏弹窗广告，集成预加载功能，图片加载完成后才会展示开屏弹窗

## 使用方式

引入
```js
import BusiPopupImg from '@hjtui/mpui/components/BusiPopupImg/BusiPopupImg.vue';
export default {
    components: {
        BusiPopupImg,
    },
}
```

使用
```html
<BusiPopupImg
    :visible.sync="showIndexAd"
    :adData="popupImg"
    :reportSource="home"
    @click="handleClick"
></BusiPopupImg>
```
```js
export default {
    methods: {
        handleClick(item) {
            // 跳转逻辑，支持协议跳转
            jumpTo(item.url);
        }
    }
}
```

## Props

<!-- @hjtvuese:BusiPopupImg:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|visible|是否展示|`Boolean`|`false`|false|
|top|广告图margin-top，顶部沉浸式体验时微调图片位置|`Number`|`false`|0|
|borderRadius|图片圆角(单位：rpx)|`Number`|`false`|20|
|imgWidth|图片的宽度，高度会根据宽度自适应|`String`|`false`|650rpx|
|customClass|自定义样式，用于覆写内部样式|`String`|`false`|-|
|adData|广告数据|`Object`|`false`|{"conifg":{},"list":[]}|
|reportType|埋点上报字段ad_type|`String`|`false`|mask|
|reportSource|埋点上报字段ad_source|`String`|`false`|-|

<!-- @hjtvuese:BusiPopupImg:props:end -->


## Events

<!-- @hjtvuese:BusiPopupImg:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|click|点击触发事件回调(item)|item: 单个广告数据|

<!-- @hjtvuese:BusiPopupImg:events:end -->


