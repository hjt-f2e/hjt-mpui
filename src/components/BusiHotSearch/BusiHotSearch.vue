<template>
    <view
        class="busi-hot-search"
        :class="customClass ? customClass : ''"
    >
        <view
            class="hot-item"
            v-for="(item, index) in adData.list"
            :key="item.ad_number"
            data-custom-event-name="AD_click"
            data-custom-prop-ad_medium="小程序"
            :data-custom-prop-ad_type="reportType"
            :data-custom-prop-ad_source="reportSource"
            :data-custom-prop-ad_code="item.ad_code"
            :data-custom-prop-ad_nike_name="item.ad_nike_name"
            :data-custom-prop-ad_number="item.ad_number"
            :data-custom-prop-ad_keyword="item.project_name"
            @click="handleClick(item, index)"
        >
            <view 
                v-if="item.image"
                class="icon"
            >
                <img :src="item.image">
            </view>
            <view class="text">
                {{ item.text }}
            </view>
        </view>
    </view>
</template>

<script>
    /* *desc
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
    */

    // @group 基础业务组件
    export default {
        props: {
            // 广告数据
            adData: {
                type: Object,
                default () {
                    return {
                        conifg: {},
                        list: [],
                    }
                }
            },
            // 自定义样式，用于覆写内部样式
            customClass: {
                type: String,
                default: '',
            },
            // 埋点上报字段ad_type
            reportType: {
                type: String,
                default: 'hotwords'
            },
            // 埋点上报字段ad_source
            reportSource: {
                type: String,
                default: ''
            },
        },
        methods: {
            handleClick(item, index) {
                // 点击触发事件回调(item, index)
                // @arg item: 单个广告数据;
                // @arg index: 广告 index位置;
                this.$emit('click', item, index);
            },
        }
    };
</script>

<style lang="scss">
.busi-hot-search {
    display: flex;
    flex-wrap: wrap;
    .hot-item {
        padding: 0 20rpx;
        margin-right: 16rpx;
        margin-bottom: 16rpx;
        border-radius: 8rpx;
        background-color: rgba(48, 55, 64, 0.05);
        font-size: 24rpx;
        display: flex;
        align-items: center;
        height: 48rpx;
    }
    .icon {
        flex: none;
        margin-right: 6rpx;
        display: flex;
        align-items: center;
        img {
            font-size: 0;
            width: 30rpx;
            height: 30rpx;
        }
    }
    .text {
        flex: none;
        color: rgba(0,0,0, .65);
    }
}
</style>
