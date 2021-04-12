/**
 * 小程序返回数据结构
 * {
 *  code: 0,
 *  message: "success",
 *  data: {
 *      config: {},
 *      list: [],
 *  }
 * }
 */

// 轮播banner数据
const bannerData = {
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
};
// 开屏弹窗数据
const popupImg = {
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
};
// 热搜词数据
const hotSearch = {
    config: {
        display_num: 6,
    },
    list: [
        {
            ad_code: "cd-search--hotwords",
            ad_nike_name: "默认、悬浮、热搜",
            ad_number: 4674,
            image: "https://imgcdn.huanjutang.com/file/2021/03/04/ea24865d58c808e48395b8c50f0196eb.jpg",
            image1: "",
            image2: "",
            project_id: 3,
            project_name: "碧桂园海昌天澜",
            sort: 0,
            style_id: 4,
            sub_title: "",
            text: "碧桂园",
            title: "",
            url: "navigateTo://pages/lotteryDetail?project_id=3",
            url_remark: '{"linkType":"adQueryProject","linkTypeText":"碧桂园海昌天澜"}',
        },
        {
            ad_code: "cd-search--hotwords",
            ad_nike_name: "默认、悬浮、热搜",
            ad_number: 4673,
            image: "",
            image1: "",
            image2: "",
            project_id: 0,
            project_name: "",
            sort: 0,
            style_id: 4,
            sub_title: "",
            text: "测试直播",
            title: "",
            url: "plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=106",
            url_remark: '{"linkType":"adQueryLives","linkTypeText":"麓山上院踩盘直播"}'
        }
    ]
}

export default {
    bannerData,
    popupImg,
    hotSearch,
};
