<template>
    <view
        v-if="isShow"
        class="popupImg-mask"
        :class="customClass ? customClass : ''"
        catchtouchmove="ture"
        @click.stop="handleClose"
    >
        <view
            class="popupImg-wrap"
            :style="{
                'margin-top': `${top}rpx`,
                '--br': `${borderRadius}rpx`,
                '--img-width': imgWidth
            }"
        >
            <view class="popupImg-box">
                <view class="white-color">
                    广告
                </view>
                <view
                    class="btn-close"
                    @click.stop="handleClose"
                >
                    跳过 {{ second }}
                </view>
                <view
                    class="popupImg-img"
                    :data-content="adData.list[0].ad_nike_name"
                    data-custom-event-name="AD_click"
                    data-custom-prop-ad_medium="小程序"
                    :data-custom-prop-ad_type="reportType"
                    :data-custom-prop-ad_source="reportSource"
                    :data-custom-prop-ad_code="adData.list[0].ad_code"
                    :data-custom-prop-ad_nike_name="adData.list[0].ad_nike_name"
                    :data-custom-prop-ad_number="adData.list[0].ad_number"
                    :data-custom-prop-ad_keyword="adData.list[0].project_name"
                    @click.stop="handleClick(adData.list[0])"
                >
                    <image
                        class="image"
                        :src="img"
                        mode="widthFix"
                    />
                </view>
            </view>
        </view>
    </view>
</template>

<script>

    export default {
        name: 'BusiPopupImg',
        props: {
            visible: {
                type: Boolean,
                default: false,
            },
            top: {
                type: Number,
                default: 0,
            },
            borderRadius: {
                type: Number,
                default: 20,
            },
            imgWidth: {
                type: String,
                default: '650rpx',
            },
            customClass: {
                type: String,
                default: '',
            },
            adData: {
                type: Object,
                default() {
                    return {
                        conifg: {},
                        list: [],
                    };
                },
            },
            reportType: {
                type: String,
                default: 'mask',
            },
            reportSource: {
                type: String,
                default: '',
            },
        },
        data() {
            return {
                second: '',
                isShow: false,
                img: '',
                timer: null,
            };
        },
        watch: {
            visible: {
                handler(visible) {
                    const { list, config } = this.adData;
                    if (visible && list) {
                        uni.downloadFile({
                            url: list[0].image,
                            success: (downloadRes) => {
                                this.img = downloadRes.tempFilePath;
                                this.isShow = true;
                                this.startCountDown(config.stay_duration);
                            },
                        });
                    } else {
                        this.isShow = false;
                    }
                },
            },
        },
        beforeDestroy() {
            clearInterval(this.timer);
            this.timer = null;
        },
        methods: {
            handleClose() {
                this.$emit('update:visible', false);
                clearInterval(this.timer);
                this.timer = null;
            },
            handleClick(item) {
                this.$emit('click', item);
            },
            startCountDown(stayDuration) {
                const countDown = Math.round(stayDuration);
                if (countDown > 0) {
                    this.second = countDown;
                    this.timer = setInterval(() => {
                        if (this.second === '0') {
                            this.handleClose();
                        }
                        this.second = `${this.second - 1}`;
                    }, 1000);
                }
            },
        },
    };
</script>

<style lang="scss">
.popupImg-mask{
    position: fixed;
    left:0;
    top:0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.65);
    z-index: 999999;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .popupImg-box{
        width: var(--img-width);
        position: relative;
        border-radius: 12rpx;
        top:0;
        .white-color {
            font-size: 18rpx;
            line-height: 1;
            background: rgba(48,50,55,0.4);
            padding: 4rpx 8rpx;
            position: absolute;
            right: 24rpx;
            bottom: 15rpx;
            z-index: 999;
            border-radius: 4rpx;
            color: white;
        }
    }

    .btn-close {
        position: absolute;
        width: 120rpx;
        height: 60rpx;
        background: rgba(48,50,55,0.4);
        border-radius: 8rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgba(255,255,255,0.9);
        font-size: 28rpx;
        z-index: 999;
        top: 24rpx;
        right: 24rpx;
        border: 2rpx solid rgba(255,255,255,0.2);
    }
    .popupImg-img{
        border-radius: var(--br);
        position: relative;
        z-index: 223;
        overflow: hidden;
    }
    .popupImg-img .image{
        width: 100%;
        height: 100%;
        display: block;
    }
}
</style>
