<template>
    <view>
        <view class="header-title">房小团-UI组件</view>
        <view class="cmp-wrapper">
            <view class="title">广告banner轮播基础业务组件</view>
            <view style="padding: 0 32rpx;">
            	<BusiBanner
					reportSource="home"
                    reportType="banner"
                    :adData="bannerData"
                    :showDot="true"
                    dotStyle="style1"
					@click="handleClick"
				></BusiBanner>
            </view>
        </view>
        <view class="cmp-wrapper">
            <view class="title">圆形进度基础UI组件</view>
            <view style="padding: 0 32rpx">
            	<BaseCircleProgress
                    title="标题"
                    :value="201"
                    :max="300"
                    valueColor="#ccc"
                    waveColor="#FFD34A"
                    titleColor="#666"
                    size="150rpx"
                    bgColor="#efefef"
                ></BaseCircleProgress>
            </view>
        </view>
        <view class="cmp-wrapper">
            <view class="title">开屏弹窗业务组件</view>
            <BusiPopupImg
                :visible.sync="showIndexAd"
                :adData="popupImg"
                :reportSource="home"
                @click="handleClick"
            ></BusiPopupImg>
        </view>
    </view>
</template>

<script>
import BusiBanner from "../../components/BusiBanner/BusiBanner.vue";
import BaseCircleProgress from '../../components/BaseCircleProgress/BaseCircleProgress.vue'
import BusiPopupImg from '../../components/BusiPopupImg/BusiPopupImg.vue'
export default {
    components: {
        BusiBanner,
        BaseCircleProgress,
        BusiPopupImg,
    },
    data() {
        return {
            title: "Hello",
            bannerData: {
                config: {
                    rotation_num: 6,
                    rotation_duration: 5000,
                },
                list: [
                    {
                        project_id: 31178,
                        project_name: "荣盛时代天府",
                        sort: 0,
                        ad_number: 7989,
                        ad_nike_name: "荣盛时代天府3月",
                        ad_code: "cd-home-top-banner",
                        url:
                            "navigateTo://pages/lotteryDetail?project_id=31178",
                        url_remark:
                            '{"linkType":"adQueryProject","linkTypeText":"荣盛时代天府"}',
                        text: "",
                        image:
                            "https://imgcdn.huanjutang.com/file/2021/03/12/2c4272485e101135e294de77b4c21a2c.jpg",
                        sub_title: "",
                        title: "",
                        image1: "",
                        image2: "",
                        style_id: 2,
                    },
                    {
                        project_id: 31084,
                        project_name: "香城云庭",
                        sort: 0,
                        ad_number: 8133,
                        ad_nike_name: "香城云庭3月",
                        ad_code: "cd-home-top-banner",
                        url:
                            "navigateTo://pages/lotteryDetail?project_id=31084",
                        url_remark:
                            '{"linkType":"adQueryProject","linkTypeText":"香城云庭"}',
                        text: "",
                        image:
                            "https://imgcdn.huanjutang.com/file/2021/03/17/99350f3a18eb8a6b1d0f574bd1f19fac.jpg",
                        sub_title: "",
                        title: "",
                        image1: "",
                        image2: "",
                        style_id: 2,
                    },
                    {
                        project_id: 31084,
                        project_name: "香城云庭",
                        sort: 0,
                        ad_number: 8133,
                        ad_nike_name: "香城云庭3月",
                        ad_code: "cd-home-top-banner",
                        url:
                            "navigateTo://pages/lotteryDetail?project_id=31084",
                        url_remark:
                            '{"linkType":"adQueryProject","linkTypeText":"香城云庭"}',
                        text: "",
                        image:
                            "https://imgcdn.huanjutang.com/file/2021/03/17/99350f3a18eb8a6b1d0f574bd1f19fac.jpg",
                        sub_title: "",
                        title: "",
                        image1: "",
                        image2: "",
                        style_id: 2,
                    },
                ],
            },
            popupImg: {
                config: {
                    max_exposure: 999,
                    stay_duration: 5
                },
                list: [
                    {
                        ad_code: "cd-home--mask",
                        ad_nike_name: "新批次10",
                        ad_number: 4426,
                        image: "https://imgcdn.huanjutang.com/file/2021/04/08/7c29b9546a9ea79e73df1483c38f2609.jpeg",
                        image1: "",
                        image2: "",
                        project_id: 9,
                        project_name: "成都融创文旅城",
                        sort: 0,
                        style_id: 2,
                        sub_title: "",
                        text: "",
                        title: "",
                        url: "navigateTo://pages/lotteryDetail?project_id=9",
                        url_remark: '{"linkType":"adQueryProject","linkTypeText":"成都融创文旅城"}',
                    }
                ]
            },
            showIndexAd: false,
        };
    },
    onLoad() {
        this.showIndexAd = true;
    },
    methods: {
		handleClick(item, index) {
			console.log('click', item, index);
		}
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
</style>
