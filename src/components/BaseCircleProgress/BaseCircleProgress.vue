<template>
    <view
        class="circle-progress"
        :style="{
            '--value-color': valueColor,
            '--title-color': titleColor,
            '--wave-color': waveColor,
            '--size': size,
            '--size-num': parseInt(size),
            '--bg-color': bgColor,
        }"
    >
        <view class="wave">
            <view
                v-show="value !== 0"
                :style="{top: percentage}"
                class="wave1"
            />
            <view
                v-show="value !== 0"
                :style="{top: percentage}"
                class="wave2"
            />
            <view
                v-show="value !== 0"
                :style="{top: percentage}"
                class="wave3"
            />
        </view>
        <view class="progress-title">
            {{ title }}
        </view>
        <view class="progress-value">
            {{ value }}
        </view>
    </view>
</template>

<script>
    /* *desc
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
     */

    // @group 基础UI组件
    export default {
        name: 'BaseCircleProgress',
        props: {
            // 标题
            title: {
                type: String,
                default: '标题',
            },
            // 当前值
            value: {
                type: Number,
                default: 0,
            },
            // 最大值
            max: {
                type: Number,
                default: 300,
            },
            // 值-颜色
            valueColor: {
                type: String,
                default: '#ccc',
            },
            // 标题-颜色
            titleColor: {
                type: String,
                default: '#666',
            },
            // 波浪-颜色
            waveColor: {
                type: String,
                default: '#FFD34A',
            },
            // 容器背景-颜色
            bgColor: {
                type: String,
                default: '#efefef',
            },
            // 大小
            size: {
                type: String,
                default: '150rpx',
            },
        },
        data() {
            return {
                percentage: '100%',
            };
        },
        watch: {
            value(to) {
                if (to) {
                    if (to >= this.max) {
                        this.percentage = '0%';
                    } else {
                        const percentageValue = ((this.max - to) / this.max);
                        this.percentage = `${percentageValue * 100 < 0 ? 0 : percentageValue * 100}%`;
                    }
                } else {
                    this.percentage = '0%';
                }
            },
        },
        mounted() {
            const percentageValue = ((this.max - this.value) / this.max);
            this.percentage = `${percentageValue * 100 < 0 ? 0 : percentageValue * 100}%`;
        },
        methods: {
        },
    };
</script>

<style lang="scss" scoped>
$length: var(--size);
%bgColor {
    background: linear-gradient(180deg, var(--wave-color) 0%, rgba(255, 150, 95, 0.13) 100%);
}
%wave {
    position: absolute;
    opacity: 1;
    width: 200%;
    height: 200%;
    @extend %bgColor;
    animation: water-wave linear infinite;
    transition: all .5s ease-in-out;
}
.circle-progress {
    position: relative;
    width: $length;
    text-align: center;
    border-radius: 50%;
    background: var(--bg-color);
    .wave {
        width: $length;
        height: $length;
        position: relative;
        // border: 1rpx solid #ccc;
        top: 100%;
        border-radius: 50%;
        overflow: hidden;
        box-sizing: border-box;
        backface-visibility: hidden;
        transform: translate3d(0, 0, 0);
        // background: white;
    }
    .wave1 {
        left: -25%;
        border-radius: 40%;
        animation-duration: 5s * 1.5;
        @extend %wave;
    }
    .wave2 {
        left: -35%;
        border-radius: 35%;
        animation-duration: 7s * 1.5;
        @extend %wave;
    }
    .wave3 {
        left: -75%;
        border-radius: 40%;
        animation-duration: 11s * 1.5;
        @extend %wave;
    }
    .progress-value, .progress-title {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
    }
    .progress-title{
        bottom: calc(var(--size-num) / 144 * 35rpx);
        width: 100%;
        height: calc(var(--size-num) / 144 * 32rpx);
        color: var(--title-color);
        font-size: calc(var(--size-num) / 144 * 20rpx)
    }
    .progress-value{
        top: calc(var(--size-num) / 144 * 16rpx);
        text-align: center;
        font-size: calc(var(--size-num) / 144 * 52rpx);
        font-family: SFUIText-Bold, SFUIText;
        font-weight: bold;
        color: var(--value-color);
        height: calc(var(--size-num) / 144 * 62rpx);
        line-height: calc(var(--size-num) / 144 * 62rpx);
    }
}
@keyframes water-wave {
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
}
</style>
