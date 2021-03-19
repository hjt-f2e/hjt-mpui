# BasiBanner

# 广告banner展示组件

## 引入
```js
import BaseBanner from '@hjtui/mpui/components/BaseBanner/BaseBanner.vue';
export default {
    components: {
        BaseBanner,
    },
}
```

## 使用
```html
<BaseBanner
    source="home"
    :adList="bannersData.list"
    :config="bannersData.config"
    @onTap="handleClick"
/>
```

## Props

<!-- @hjtvuese:BasiBanner:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|adList|数据源|`Array`|`false`|[{}]|
|height|表示是否是recommend-banners, 高度要变化|`Number`|`false`|280|
|swiperDots|轮播圆点|`Boolean`|`false`|true|
|swiperCircular|首尾衔接|`Boolean`|`false`|true|
|source|埋点source字段|`String`|`false`|-|
|config|配置|`Object`|`false`|{}|

<!-- @hjtvuese:BasiBanner:props:end -->


## Events

<!-- @hjtvuese:BasiBanner:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|onTap|点击触发事件回调(url, id, index)|url 跳转地址; id 广告id; index 位置;|

<!-- @hjtvuese:BasiBanner:events:end -->


