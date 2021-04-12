# BusiHotSearch

# 热搜词广告业务组件

> 一般用于搜索框下部，展示热搜词广告

![](https://imgcdn.huanjutang.com/file/2021/04/12/06425bcf384ab51c9e2d874169348e3d.png)

## 使用方式

引入
```js
import BusiHotSearch from '@hjtui/mpui/components/BusiHotSearch/BusiHotSearch.vue';
export default {
    components: {
        BusiHotSearch,
    },
}
```

使用
```html
<view style="padding: 0 32rpx;">
    <BusiHotSearch
        customClass="hotSearch"
        :adData="hotSearch"
        :reportType="hotwords"
        :reportSource="search"
        @click="handleClick"
    ></BusiHotSearch>
</view>
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

<!-- @hjtvuese:BusiHotSearch:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|adData|广告数据|`Object`|`false`|{"conifg":{},"list":[]}|
|customClass|自定义样式，用于覆写内部样式|`String`|`false`|-|
|reportType|埋点上报字段ad_type|`String`|`false`|hotwords|
|reportSource|埋点上报字段ad_source|`String`|`false`|-|

<!-- @hjtvuese:BusiHotSearch:props:end -->


## Events

<!-- @hjtvuese:BusiHotSearch:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|click|点击触发事件回调(item, index)|item: 单个广告数据; index: 广告 index位置;|

<!-- @hjtvuese:BusiHotSearch:events:end -->


