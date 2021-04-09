# BusiBanner

# 广告banner展示组件

> banner图片展示承载组件

## 使用方式

引入
```js
import BusiBanner from '@hjtui/mpui/components/BusiBanner/BusiBanner.vue';
export default {
    components: {
        BusiBanner,
    },
}
```

使用
```html
<view style="padding: 0 32rpx;">
    <BusiBanner
        reportSource="home"
        reportType="banner"
        :adData="adData"
        :showDot="true"
        dotStyle="style1"
        @click="handleClick"
    />
</view>
```
```js
export default {
    methods: {
        handleClick(item, index) {
            // 跳转逻辑，支持协议跳转
            jumpTo(item.url);
        }
    }
}
```

## Props

<!-- @hjtvuese:BusiBanner:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|adData|广告数据|`Object`|`false`|{"config":{},"list":[]}|
|height|高度(单位：rpx)|`Number`|`false`|280|
|showDot|是否显示轮播圆点|`Boolean`|`false`|true|
|dotStyle|轮播圆点样式 ```[default, style1]```|`String`|`false`|default|
|swiperCircular|是否首尾衔接|`Boolean`|`false`|true|
|duration|切换动画时长ms|`Number`|`false`|300|
|reportType|埋点上报字段ad_type|`String`|`false`|banner|
|reportSource|埋点上报字段ad_source|`String`|`false`|-|

<!-- @hjtvuese:BusiBanner:props:end -->


## Events

<!-- @hjtvuese:BusiBanner:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|click|点击触发事件回调(item, index)|item: 单个广告数据; index: banner index位置;|

<!-- @hjtvuese:BusiBanner:events:end -->


