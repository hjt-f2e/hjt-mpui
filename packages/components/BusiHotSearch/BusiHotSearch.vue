<template>
    <view
        class="busi-hot-search"
        :class="customClass ? customClass : ''"
    >
        <view
            v-for="(item, index) in adData.list"
            :key="item.ad_number"
            class="hot-item"
            :data-content="item.ad_nike_name"
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
                <image
                    class="image"
                    :src="item.image"
                />
            </view>
            <view class="text">
                {{ item.text }}
            </view>
        </view>
    </view>
</template>

<script>

    export default {
        props: {
            adData: {
                type: Object,
                default() {
                    return {
                        conifg: {},
                        list: [],
                    };
                },
            },
            customClass: {
                type: String,
                default: '',
            },
            reportType: {
                type: String,
                default: 'hotwords',
            },
            reportSource: {
                type: String,
                default: '',
            },
        },
        methods: {
            handleClick(item, index) {
                this.$emit('click', item, index);
            },
        },
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
        .image {
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
