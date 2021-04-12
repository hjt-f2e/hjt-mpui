<template>
    <view>
        <!-- 多张 -->
        <view
            v-if="adList.length > 1"
            class="banner-swiper-wrapper"
            :class="customClass ? customClass : ''"
            :style="{height:height+'rpx'}"
        >
            <swiper
                v-if="adList.length > 0"
                class="swiper"
                :style="{
                    height: height + 'rpx'
                }"
                :current="swiperCurrent"
                :circular="swiperCircular"
                :indicator-dots="showDot && dotStyle === 'default'"
                autoplay="true"
                :interval="config.rotation_duration || 4000"
                indicator-color="rgba(255,255,255,.4)"
                indicator-active-color="#ffffff"
                :duration="duration"
                @change="changeSwiper"
                @transition="transitionSwiper"
                @animationfinish="animationfinish"
            >
                <block
                    v-for="(item, index) in adList"
                    :key="item.ad_number"
                >
                    <swiper-item
                        :id="item.ad_number"
                        class="swiperItem"
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
            <!-- 轮播指示点样式修改 -->
            <view
                v-if="showDot && dotStyle === 'style1'"
                class="dots"
            >
                <view
                    v-for="(item,index) in adList.length"
                    :key="item"
                    :class="{
                        'dot': true,
                        'dot-active': index === swiperCurrent
                    }"
                    :style="{
                        '--duration': Math.round(config.rotation_duration / 1000) + 's',
                        '--width': activeDotWidth + 'rpx',
                    }"
                />
            </view>
        </view>
        <!-- 只有一张图片 -->
        <view
            v-else-if="adList.length === 1"
            class="banner-swiper-wrapper"
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
                    :data-custom-prop-ad_type="reportType"
                    :data-custom-prop-ad_source="reportSource"
                    :data-custom-prop-ad_code="adList[0].ad_code"
                    :data-custom-prop-ad_nike_name="adList[0].ad_nike_name"
                    :data-custom-prop-ad_number="adList[0].ad_number"
                    :data-custom-prop-ad_keyword="adList[0].project_name"
                    @click="handleClick(adList[0], 0)"
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
    import ImageLoader from '../BaseImageLoader/BaseImageLoader.vue';
    /* *desc
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
    */

    // @group 基础业务组件
    export default {
        name: 'BusiBanner',
        components: {
            ImageLoader
        },

        props: {
            // 广告数据
            adData: {
                type: Object,
                default() {
                    return {
                        config: {},
                        list: []
                    };
                }
            },
            // 自定义样式，用于覆写内部样式
            customClass: {
                type: String,
                default: '',
            },
            // 高度(单位：rpx)
            height: {
                type: Number,
                default: 280
            },
            // 是否显示轮播圆点
            showDot: {
                type: Boolean,
                default: true
            },
            // 轮播圆点样式 ```[default, style1]```
            dotStyle: {
                type: String,
                default: 'default'
            },
            // 是否首尾衔接
            swiperCircular: {
                type: Boolean,
                default: true
            },
            // 切换动画时长ms
            duration: {
                type: Number,
                default: 300
            },
            // 埋点上报字段ad_type
            reportType: {
                type: String,
                default: 'banner'
            },
            // 埋点上报字段ad_source
            reportSource: {
                type: String,
                default: ''
            },
        },

        watch: {
            adData: {
                handler(to) {
                    this.adList = to.list;
                    this.config = to.config;
                },
                immediate: true,
            },
        },

        data() {
            return {
                swiperCurrent: 0,
                adList: this.adData.list,
                config: this.adData.config,
                activeDotWidth: 0,
            };
        },

        mounted() {
            this.activeDotWidth = 28;
        },

        methods: {
            handleClick(item, index) {
                if (!item.url.includes('navigateTo://none')) {
                    // 点击触发事件回调(item, index)
                    // @arg item: 单个广告数据;
                    // @arg index: banner index位置;
                    this.$emit('click', item, index);
                }
            },
            // 滑动的问题
            changeSwiper(e) {
                const { current } = e.detail;
                this.swiperCurrent = current;
            },
            // 动画结束
            animationfinish() {
                this.activeDotWidth = 28;
            },
            // 左右划触发
            transitionSwiper(e) {
                this.activeDotWidth = 0;
            }
        }
    };
</script>

<style lang="scss" scoped>
    .banner-swiper-wrapper{
        height: 280rpx;
        background: #fff;
        overflow: hidden;
        border-radius: 8rpx;
        position: relative;
        .swiper {
            height: 280rpx;
            border-radius: 8rpx;
        }
        .swiperItem {
            position: relative;
            border-radius: 8rpx;
        }
    }
    .banner-swiper-wrapper .top-banner-image{
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
    .dots {
    position: absolute;
    bottom: 20rpx;
    left: 24rpx;
    z-index: 99;
    display: flex;
    align-items: center;
    .dot {
        flex: none;
        width: 12rpx;
        height: 12rpx;
        background:rgba(255,255,255,.7);
        border-radius: 50%;
        margin-left: 8rpx;
        transition: width .3s;
        position: relative;
        overflow: hidden;
        &:after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            background: white;
            width: 0rpx;
            height: 12rpx;
        }
    }
    .dot-active {
        width: 28rpx;
        height: 12rpx;
        border-radius: 12rpx;
        background: rgba(255, 255, 255, .8);
        &:after {
            content: "";
            width: var(--width);
            transition: width var(--duration) linear;
        }
    }
}
</style>
