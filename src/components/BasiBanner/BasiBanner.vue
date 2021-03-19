<template>
    <view>
        <!-- 多张 -->
        <view
            v-if="adList.length > 1"
            class="init__banner-block"
            :style="{height:height+'rpx'}"
        >
            <swiper
                v-if="adList.length > 0"
                class="swiper"
                :style="{
                    height: height + 'rpx'
                }"
                :circular="swiperCircular"
                :indicator-dots="adList.length > 1 && swiperDots"
                autoplay="true"
                :interval="config.rotation_duration || 4000"
                indicator-color="rgba(255,255,255,.4)"
                indicator-active-color="#ffffff"
                duration="300"
            >
                <block
                    v-for="(item, index) in adList"
                    :key="index"
                >
                    <swiper-item
                        :id="item.ad_number"
                        class="swiperItem"
                        data-custom-event-name="AD_click"
                        data-custom-prop-ad_medium="小程序"
                        data-custom-prop-ad_type="banner"
                        :data-custom-prop-ad_source="source"
                        :data-custom-prop-ad_code="item.ad_code"
                        :data-custom-prop-ad_nike_name="item.ad_nike_name"
                        :data-custom-prop-ad_number="item.ad_number"
                        :data-custom-prop-ad_keyword="item.project_name"
                        @click="handleClick(item.url, item.ad_number, index)"
                    >
                        <ImageLoader
                            :source="item.image"
                            mode="aspectFill"
                            :styles="{height: height + 'rpx'}"
                        />
                        <view class="white-color advert">
                            广告
                        </view>
                    </swiper-item>
                </block>
            </swiper>
        </view>
        <!-- 只有一张图片 -->
        <view
            v-else-if="adList.length === 1"
            class="init__banner-block relative"
            :style="{height: height + 'rpx'}"
        >
            <view
                v-if="adList[0].image"
                class="banner_worp"
            >
                <view
                    :id="adList[0].ad_number"
                    class="top-banner-image"
                    data-custom-event-name="AD_click"
                    data-custom-prop-ad_medium="小程序"
                    data-custom-prop-ad_type="banner"
                    :data-custom-prop-ad_source="source"
                    :data-custom-prop-ad_code="adList[0].ad_code"
                    :data-custom-prop-ad_nike_name="adList[0].ad_nike_name"
                    :data-custom-prop-ad_number="adList[0].ad_number"
                    :data-custom-prop-ad_keyword="adList[0].project_name"
                    @click="handleClick(adList[0].url ,adList[0].ad_number, 0)"
                >
                    <ImageLoader
                        :source="adList[0].image"
                        mode="aspectFill"
                        :styles="{height: height + 'rpx'}"
                    />
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    import ImageLoader from '../BusiImageLoader/BusiImageLoader.vue';
    /* *desc
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
    */

    // @group 基础组件
    export default {
        components: {
            ImageLoader
        },

        props: {
            // 数据源
            adList: {
                type: Array,
                default() {
                    return [{}];
                }
            },
            // 高度
            height: {
                type: Number,
                default: 280
            },
            // 是否显示轮播圆点
            swiperDots: {
                type: Boolean,
                default: true
            },
            // 是否首尾衔接
            swiperCircular: {
                type: Boolean,
                default: true
            },
            // 埋点字段ad_source
            source: {
                type: String,
                default: ''
            },
            // 配置
            config: {
                type: Object,
                default() {
                    return {};
                }
            }
        },

        methods: {
            handleClick(url, id, index) {
                if (!url.includes('navigateTo://none')) {
                    // 点击触发事件回调(url, id, index)
                    // @arg url 跳转地址;
                    // @arg id 广告id;
                    // @arg index banner index位置;
                    this.$emit('onTap', url, id, index);
                }
            }
        }
    };
</script>

<style lang="scss">
    .init__banner-block{
        height: 280rpx;
        background: #fff;
        overflow: hidden;
        border-radius: 8rpx;
        .swiper {
            height: 280rpx;
            border-radius: 8rpx;
        }
        .swiperItem {
            position: relative;
            border-radius: 8rpx;
        }
    }
    .init__banner-block .top-banner-image{
        height: 100%;
        border-radius: 8rpx;
    }
     .slide-image {
        width: 100%;
        max-width: 100%;
        height: 280rpx;
        border-radius: 8rpx;
    }
    .advert{
        font-size: 18rpx;
        line-height: 26rpx;
        text-align: center;
        background: rgba(0,0,0,.3);
        width: 50rpx;
        height: 26rpx;
        position: absolute;
        right: 12rpx;
        bottom: 12rpx;
        z-index: 222;
        border-radius: 1rpx;
        opacity: 0.4;
    }
</style>
