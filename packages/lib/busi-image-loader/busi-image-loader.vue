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
        <!-- 出现在屏幕才加载资源 -->
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
    /* *desc
    # 图片懒加载组件
    优化页面图片加载性能，实现图片懒加载

    ## 使用方式
    ```javascript
    import ImageLoader from '@/components/ImageLoader.vue';
    export default {
        components: {
            ImageLoader
        }
    };
    ```
    ```html
    <ImageLoader
        mode="aspectFill"
        :source="图片地址"
        :styles="{
            width: '100%',
            height: '100%'
        }"
    />
    ```
     */

    // @group 基础组件
    export default {
        props: {
            // 资源路径
            source: {
                type: String,
                default() {
                    return '';
                }
            },
            // 资源样式
            styles: {
                type: Object,
                default() {
                    return {};
                }
            },
            // 图片加载模式
            mode: {
                type: String,
                default() {
                    return 'aspectFill';
                }
            },
            // 默认占位图
            defaultImage: {
                type: String,
                default() {
                    return 'https://imgcdn.huanjutang.com/assets/img/20212231125168081.jpeg';
                }
            },
            // 加载资源时距离屏幕的高度（最好是资源高度的一倍及以上）
            distance: {
                type: Number,
                default() {
                    return 0;
                }
            }
        },

        data() {
            /**
             * 设置到全局变量会被覆盖
             * 设置到响应式data中会发生循环引用
             */
            this.observer = null;
            return {
                // 图片是否已经加载
                loaded: false,
                // 是否出现在可视范围
                ratio: 0
            };
        },

        computed: {
            // 把styleObject转换为字符串
            baseStyle() {
                let result = '';
                Object.keys(this.styles || {}).forEach(key => {
                    result += `${key}: ${this.styles[key]};`;
                });
                return result;
            }
        },

        mounted() {
            this.reset();
            // 保证节点可见
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
                // TODO
                // 图片加载出错时，上报信息
                this.callback();
            },
            handleImageLoaded() {
                this.callback();
            },
            // 监测节点，只要出现在屏幕就断开观察
            setObserver() {
                this.observer = this.createIntersectionObserver();
                this.observer.relativeToViewport({ bottom: this.distance }).observe('.loader', res => {
                    if (res.intersectionRatio > 0) {
                        this.ratio = 1;
                        this.disconnectObserver();
                    }
                });
            },
            // 断开观察
            disconnectObserver() {
                if (this.observer) {
                    this.observer.disconnect();
                    this.observer = null;
                }
            }
        }
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
