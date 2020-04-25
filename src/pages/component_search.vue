<template>
    <div class="app">
        <navbar class="page-navbar">
            <navbar-item type="back"></navbar-item>
            <navbar-item type="title">
                <input :autofocus="true" v-model="keywords" class="input" placeholder="丈八北路 | 西二旗 | 张江地铁站" type="text"/>
            </navbar-item>
            <navbar-item type="right" @click="search">
                <icon class="icon" :eeui="{ content: 'ios-search' }"></icon>
            </navbar-item>
        </navbar>
        <div class="house-type" v-if="isSearch">
            <button class="type-button" text="城市" model="white"></button>
            <button class="type-button" style="margin-right: 10px;" text="类型" model="white"></button>
        </div>
        <scroll-view
            ref="reflectName"
            class="list"
            :eeui="{
                    pullTips: true,
                }"
            @itemClick="itemClick"
            @pullLoadListener="pullLoadListener"
            @refreshListener="refreshListener">
            <div class="panel" v-for="(num, index) in lists" :key="index">
                <div class="panel-item">
                    <image class="fang-img" resize="cover" src="https://ke-image.ljcdn.com/110000-inspection/pc1_CUm3KlMXl.jpg.280x210.jpg"></image>
                    <div class="house-info">
                        <text class="panel-text">檀香府南北通透三居室</text>
                        <text class="panel-text">135.24㎡/南 北/高楼层 (共6层)</text>
                        <div class="house-tag">
                            <image style="height: 45px;width: 120px;" src="https://img.ljcdn.com/beike/haofanglogo/1573111250229.png"></image>
                            <text class="house-tag-text">诚心卖，省心买</text>
                        </div>
                        <div class="house-tag">
                            <text class="panel-text" style="color: #fe615a;margin-right: 40px;">439 万</text>
                            <text class="panel-text">32460.8 元/平米</text>
                        </div>
                    </div>
                </div>
            </div>
        </scroll-view>
    </div>
</template>

<script>
    const eeui = app.requireModule('eeui');

    export default {
        data() {
            return {
                text: '按钮',
                width: '702px',
                height: '80px',
                loading: false,
                disabled: false,
                backgroundColor: '#FF5000',
                borderColor: '#FF5000',
                borderRadius: '8px',
                fontSize: '28px',
                color: '#FFFFFF',
                keywords: '',
                lists: [],
                page_size: 6,
                isSearch: false,
            };
        },
        mounted() {
        },
        computed: {
            eeuiStyle() {
                const { backgroundColor, borderColor, borderRadius, text, color, loading, disabled } = this;
                const customStyle = {};
                if (backgroundColor) {
                    customStyle.backgroundColor = backgroundColor;
                }
                if (borderColor) {
                    customStyle.borderColor = borderColor;
                    customStyle.borderWidth = "1px";
                }
                if (borderRadius) {
                    customStyle.borderRadius = borderRadius;
                }
                if (text) {
                    customStyle.text = text;
                }
                if (color) {
                    customStyle.color = color;
                }
                customStyle.loading = loading;
                customStyle.disabled = disabled;
                return customStyle;
            },

            demoStyle() {
                const { width, height } = this;
                const customStyle = {};
                customStyle.width = width;
                customStyle.height = height;
                return customStyle;
            }
        },
        methods: {
            search() {
                eeui.toast(this.keywords)
                if (this.keywords) {
                    this.refreshListener();
                    this.isSearch = true;
                }
            },
            pullLoadListener() {
                let count = this.lists.length;
                if (count >= 50) {
                    this.$refs.reflectName.setHasMore(false);
                    return;
                }
                setTimeout(() => {
                    for (let i = 1; i <= this.page_size; i++) {
                        this.lists.push(count + i);
                    }
                    this.$refs.reflectName.pullloaded();
                    eeui.toast("加载" + (count + 1) + "~" + this.lists.length + "数据成功");
                }, 300);

            },
            refreshListener() {
                let newList = [];
                for (let i = 1; i <= this.page_size; i++) {
                    newList.push(i);
                }
                setTimeout(() => {
                    this.lists = newList;
                    this.$refs.reflectName.setHasMore(true);
                    this.$refs.reflectName.refreshed();
                    eeui.toast("刷新数据成功");
                }, 300);

            },
        }
    };
</script>

<style scoped>
    .app {
        width: 750px;
        flex: 1;
        background-color: #ffffff;
    }

    .navbar {
        width: 750px;
        height: 100px;
    }

    .page-navbar {
        width: 750px;
        height: 90px;
    }

    .page-navbar-title {
        color: #ffffff;
        font-size: 28px;
    }

    .title {
        font-size: 28px;
        color: #ffffff
    }

    .iconr {
        width: 100px;
        height: 100px;
        color: #ffffff;
    }

    .list {
        width: 750px;
        flex: 1;
    }

    .list-title {
        margin-top: 24px;
        margin-bottom: 12px;
        padding-top: 36px;
        padding-right: 24px;
        padding-bottom: 24px;
        padding-left: 24px;
        font-size: 28px;
        color: #757575;
    }

    .list-item {
        width: 750px;
        flex-direction: row;
    }

    .button {
        font-size: 24px;
        margin-left: 37.5px;
        margin-right: 37.5px;
        margin-bottom: 20px;
        width: 300px;
        height: 80px;
    }

    .list-input-item {
        width: 750px;
        height: 90px;
        flex-direction: row;
        align-items: center;
        border-bottom-color: #e4e4e4;
        border-bottom-style: solid;
        border-bottom-width: 1px;
    }

    .cell {
        padding-left: 50px;
        font-size: 24px;
        color: #666666;
    }

    .switch {
        margin-right: 40px;
    }

    .input {
        background-color: #fff;
        padding-left: 10px;
        border-width: 1px;
        height: 70px;
        font-size: 30px;
        border-radius: 10px;
        width: 490px;
        border-color: #2d63da;
    }

    .icon {
        color: #fff;
        margin-right: 30px;
        width: 60px;
        height: 80px;
        font-size: 60px;
    }


    .panel {
        width: 750px;
        border-bottom-color: #e4e4e4;
        border-bottom-style: solid;
        border-bottom-width: 1px;
    }

    .panel-item {
        width: 750px;
        padding-top: 22px;
        padding-bottom: 22px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .house-info {
        width: 520px;
        height: 180px;
        flex-direction: column;
        justify-content: center;
    }

    .house-type {
        width: 750px;
        height: 60px;
        background-color: #f8f8f8;
        flex-direction: row;
        justify-content:flex-end;
        border-bottom-color: #e4e4e4;
        border-bottom-width: 1px;
    }

    .type-button {
        width: 80px;
        padding: 10px;
        color:#2d63da;
        font-size: 26px;
        background-color: #f8f8f8;
    }

    .panel-text {
        font-size: 26px;
        text-align: left;
    }

    .house-tag {
        flex-direction: row;
    }

    .house-tag-text {
        line-height: 50px;
        padding-left: 10px;
        background-color: #f8f8f8;
        color: #222;
        width: 380px;
    }
    .fang-img {
        margin-left: 10px;
        width: 200px;
        height: 140px;
    }

</style>
