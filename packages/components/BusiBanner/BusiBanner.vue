<template>
    <view
        class="busi-banner"
        :class="customClass ? customClass : ''"
    >
        <view
            v-if="adList.length > 1"
            class="banner-swiper-wrapper"
            :style="{height:height+'rpx'}"
        >
            <swiper
                v-if="adList.length > 0"
                class="swiper"
                :style="{
                    height: height + 'rpx'
                }"
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

    export default {
        name: 'BusiBanner',
        components: {
            ImageLoader,
        },

        props: {
            adData: {
                type: Object,
                default() {
                    return {
                        config: {},
                        list: [],
                    };
                },
            },
            customClass: {
                type: String,
                default: '',
            },
            height: {
                type: Number,
                default: 280,
            },
            showDot: {
                type: Boolean,
                default: true,
            },
            dotStyle: {
                type: String,
                default: 'default',
            },
            swiperCircular: {
                type: Boolean,
                default: true,
            },
            duration: {
                type: Number,
                default: 300,
            },
            reportType: {
                type: String,
                default: 'banner',
            },
            reportSource: {
                type: String,
                default: '',
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

        watch: {
            adData: {
                handler(to) {
                    const hasList = Object.hasOwnProperty.call(to, 'list');
                    const hasConfig = Object.hasOwnProperty.call(to, 'config');
                    if (hasList && hasConfig) {
                        this.adList = to.list;
                        this.config = to.config;
                        this.$nextTick(() => {
                            this.activeDotWidth = 28;
                        });
                    } else {
                        this.adList = [];
                        this.config = {};
                    }
                },
                immediate: true,
            },
        },

        methods: {
            handleClick(item, index) {
                if (!item.url.includes('navigateTo://none')) {
                    this.$emit('click', item, index);
                }
            },
            changeSwiper(e) {
                const { current } = e.detail;
                this.swiperCurrent = current;
            },
            animationfinish() {
                this.activeDotWidth = 28;
            },
            transitionSwiper() {
                this.activeDotWidth = 0;
            },
        },
    };
</script>

<style lang="scss">
    .busi-banner {
        .banner-swiper-wrapper{
            height: 280rpx;
            background: #fff;
            overflow: hidden;
            border-radius: 8rpx;
            position: relative;
            .swiper {
                height: 280rpx;
                border-radius: 8rpx;
                overflow:hidden;
                transform: translateY(0);
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
    }
</style>
