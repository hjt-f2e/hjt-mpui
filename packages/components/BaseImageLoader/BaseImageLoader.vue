<template>
    <view
        class="loader"
        :class="{'gray-bg': !loaded}"
        :style="baseStyle"
    >
        <image
            v-if="loaded"
            :src="source || defaultImage"
            :style="baseStyle"
            class="image fadeIn"
            :mode="mode"
            lazy-load
        />
        <image
            v-if="ratio === 1"
            class="backup"
            :src="source"
            @error="handleImageLoadError"
            @load="handleImageLoaded"
        />
    </view>
</template>

<script>

    export default {
        name: 'BaseImageLoader',
        props: {
            source: {
                type: String,
                default() {
                    return '';
                },
            },
            styles: {
                type: Object,
                default() {
                    return {};
                },
            },
            mode: {
                type: String,
                default() {
                    return 'aspectFill';
                },
            },
            defaultImage: {
                type: String,
                default() {
                    return 'https://imgcdn.huanjutang.com/assets/img/20212231125168081.jpeg';
                },
            },
            distance: {
                type: Number,
                default() {
                    return 0;
                },
            },
        },

        data() {
            this.observer = null;
            return {
                loaded: false,
                ratio: 0,
            };
        },

        computed: {
            baseStyle() {
                let result = '';
                Object.keys(this.styles || {}).forEach((key) => {
                    result += `${key}: ${this.styles[key]};`;
                });
                return result;
            },
        },

        mounted() {
            this.reset();
            this.$nextTick(() => {
                this.setObserver();
            });
        },

        destroyed() {
            this.reset();
        },

        methods: {
            reset() {
                this.disconnectObserver();
            },
            callback() {
                this.loaded = true;
            },
            handleImageLoadError() {
                this.callback();
            },
            handleImageLoaded() {
                this.callback();
            },
            setObserver() {
                this.observer = this.createIntersectionObserver();
                this.observer.relativeToViewport({ bottom: this.distance }).observe('.loader', (res) => {
                    if (res.intersectionRatio > 0) {
                        this.ratio = 1;
                        this.disconnectObserver();
                    }
                });
            },
            disconnectObserver() {
                if (this.observer) {
                    this.observer.disconnect();
                    this.observer = null;
                }
            },
        },
    };
</script>

<style lang="scss" scoped>
    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    .gray-bg {
        background: #F2F2F2;
    }

    .fadeIn {
        animation: fadeIn 0.3s both;
    }

    .image {
        display: block;
        width: 100%;
        height: 480rpx;
    }

    .backup {
        position: absolute;
        left: -100%;
        right: -100%;
        width: 1rpx;
        height: 1rpx;
        opacity: 0;
    }
</style>
