# BasiBanner

# 广告banner展示组件

> banner图片展示承载组件

## 使用方式
```js
import BaseBanner from '@hjtui/mpui/components/BaseBanner/BaseBanner.vue';
export default {
    components: {
        BaseBanner,
    },
}
```

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
|height|高度|`Number`|`false`|280|
|swiperDots|是否显示轮播圆点|`Boolean`|`false`|true|
|swiperCircular|是否首尾衔接|`Boolean`|`false`|true|
|source|埋点字段ad_source|`String`|`false`|-|
|config|配置|`Object`|`false`|{}|

<!-- @hjtvuese:BasiBanner:props:end -->


## Events

<!-- @hjtvuese:BasiBanner:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|onTap|点击触发事件回调(url, id, index)|url 跳转地址; id 广告id; index banner index位置;|

<!-- @hjtvuese:BasiBanner:events:end -->


