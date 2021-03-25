# BaseCircleProgress

# 圆形波浪进度基础组件

> 带有波浪动画的圆形容器波浪组件

![](https://imgcdn.huanjutang.com/file/2021/03/25/120d8001aa32b6dc4798e3b55ad24007.png)

## 使用方式
```javascript
import BaseCircleProgress from '@hjtui/mpui/components/BaseCircleProgress/BaseCircleProgress.vue';
export default {
    components: {
        BaseCircleProgress
    }
};
```
```html
<BaseCircleProgress
    title="标题"
    :value="201"
    :max="300"
    valueColor="#ccc"
    waveColor="#FFD34A"
    titleColor="#666"
    size="150rpx"
    bgColor="#efefef"
/>
```

## Props

<!-- @hjtvuese:BaseCircleProgress:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|title|标题|`String`|`false`|标题|
|value|当前值|`Number`|`false`|0|
|max|最大值|`Number`|`false`|300|
|valueColor|值-颜色|`String`|`false`|#ccc|
|titleColor|标题-颜色|`String`|`false`|#666|
|waveColor|波浪-颜色|`String`|`false`|#FFD34A|
|bgColor|容器背景-颜色|`String`|`false`|#efefef|
|size|大小|`String`|`false`|150rpx|

<!-- @hjtvuese:BaseCircleProgress:props:end -->


