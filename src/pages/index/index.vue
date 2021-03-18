<template>
    <view>
        <view class="header-title">房小团-UI组件</view>
        <view class="cmp-wrapper">
            <view class="title">广告banner轮播组件</view>
            <view style="padding: 0 32rpx;">
            	<BusiBanner
					source="home"
					:adList="adData.list"
					:config="adData.config"
					@onTap="handleClick"
				></BusiBanner>
            </view>
        </view>
    </view>
</template>

<script>
import BusiBanner from "../../components/busi-banner/busi-banner.vue";
export default {
    components: {
        BusiBanner,
    },
    data() {
        return {
            title: "Hello",
            adData: {
                config: {
                    rotation_num: 6,
                    rotation_duration: 3000,
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
                ],
            },
        };
    },
    onLoad() {},
    methods: {
		handleClick(url, id, index) {
			console.log('tap', url, id, index);
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
