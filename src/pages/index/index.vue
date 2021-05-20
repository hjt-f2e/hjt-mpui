<template>
    <view>
        <view class="header-title">
            房小团-UI组件
        </view>
        <view class="cmp-wrapper">
            <view class="title">
                广告banner轮播基础业务组件
            </view>
            <view style="padding: 0 32rpx;">
                <BusiBanner
                    report-source="home"
                    report-type="banner"
                    :ad-data="bannerData"
                    :show-dot="true"
                    dot-style="style1"
                    @click="handleClick"
                />
            </view>
        </view>
        <view class="cmp-wrapper">
            <view class="title">
                圆形进度基础UI组件
            </view>
            <view style="padding: 0 32rpx">
                <BaseCircleProgress
                    title="标题"
                    :value="201"
                    :max="300"
                    value-color="#ccc"
                    wave-color="#FFD34A"
                    title-color="#666"
                    size="150rpx"
                    bg-color="#efefef"
                />
            </view>
        </view>
        <view class="cmp-wrapper">
            <view class="title">
                开屏弹窗业务组件
            </view>
            <button @click="showIndexAd = true;">
                打开开屏弹窗
            </button>
            <BusiPopupImg
                :visible.sync="showIndexAd"
                :ad-data="popupImg"
                :report-source="home"
                @click="handleClick"
                @update:visible="handleUpdateVisible"
            />
        </view>
        <view class="cmp-wrapper">
            <view class="title">
                热搜词业务组件
            </view>
            <view style="padding: 0 32rpx;">
                <BusiHotSearch
                    custom-class="hotSearch"
                    :ad-data="hotSearch"
                    :report-type="hotwords"
                    :report-source="search"
                    @click="handleClick"
                />
            </view>
        </view>
        <button @click="handleTestClick">
            test
        </button>
    </view>
</template>

<script>
    import BusiBanner from '../../components/BusiBanner/BusiBanner.vue';
    import BaseCircleProgress from '../../components/BaseCircleProgress/BaseCircleProgress.vue';
    import BusiPopupImg from '../../components/BusiPopupImg/BusiPopupImg.vue';
    import BusiHotSearch from '../../components/BusiHotSearch/BusiHotSearch.vue';
    // 虚拟数据
    import vitualData from '../../vitualData/index';

    export default {
        components: {
            BusiBanner,
            BaseCircleProgress,
            BusiPopupImg,
            BusiHotSearch,
        },
        data() {
            return {
                title: 'Hello',
                // 广告轮播数据
                bannerData: {},
                // 开屏弹窗数据
                popupImg: vitualData.popupImg,
                showIndexAd: false,
                // 热搜词数据
                hotSearch: vitualData.hotSearch,
            };
        },
        onLoad() {
            setTimeout(() => {
                this.bannerData = vitualData.bannerData;
            }, 1000);
        },
        methods: {
            // 广告点击回调
            handleClick(item, index) {
                // eslint-disable-next-line no-console
                console.log('click', item, index);
            },
            handleUpdateVisible(val) {
                // eslint-disable-next-line no-console
                console.log(val);
            },
            handleTestClick() {
                // uni.showLoading();
                new Promise((resolve) => {
                    setTimeout(() => {
                        resolve();
                    }, 1000);
                }).then(() => {
                    uni.hideLoading();
                }).catch(() => {
                    uni.hideLoading();
                });
            },
        },
    };
</script>

<style lang="scss">
.header-title {
    font-size: 40rpx;
    font-weight: bold;
    color: #666;
    padding: 32rpx;
    border-bottom: 1px solid #ccc;
}
.cmp-wrapper {
    .title {
        font-size: 32rpx;
        color: #777;
        padding: 32rpx;
    }
}
.hotSearch {
    .icon {
        .image {
            width: 60rpx;
            height: 60rpx;
        }
    }
}
</style>
