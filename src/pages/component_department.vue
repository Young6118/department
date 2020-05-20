<template>
    <div class="app">

        <banner class="banner" @itemClick="itemClick">
            <div class="banner-frame" v-for="img in imageList">
                <image class="banner-image" resize="cover" :src="img.src"></image>
            </div>
        </banner>
        <div style="flex-direction: row;justify-content: space-between;">
            <div>
                <div style="width: 450px;height: 150px;">
                    <text style="font-size: 40px;line-height: 120px;">{{ department.title }}</text>
                </div>
                <div style="flex-direction: row;">
                    <text style="height: 40px;font-size: 28px;">参考价格：</text>
                    <text style="height: 40px;color: #fe615a;font-size: 28px;">{{ department.price }}元/㎡</text>
                </div>
                <div style="flex-direction: row;">
                    <text style="height: 40px;font-size: 28px;">售楼热线：</text>
                    <text style="height: 40px;color: #fe615a;font-size: 28px;">{{ department.phone }}</text>
                </div>
            </div>
            <div style="align-items: center;">
                <button style="width: 300px;height: 120px;" text="网上认购" model="yellow" borderRadius="0"></button>
                <button style="width: 200px;height: 200px;margin-top: 20px;" text="咨询客服" model="red" borderRadius="100"></button>
            </div>
        </div>
        <div style="position:fixed;bottom:0;left:0;width:750px;height: 150px;flex-direction: row;justify-content: space-between;">
            <div>
                <icon style="width: 100px;height: 100px;color: red;font-size:100px;" content="ios-call"></icon>
                <text style="font-size: 30px;text-align:center;width: 100px;">电话</text>
            </div>
            <div>
                <icon style="width: 100px;height: 100px;color: red;font-size:100px;" content="ios-star-outline"></icon>
                <text style="font-size: 30px;text-align:center;width: 100px;">收藏</text>
            </div>
            <div>
                <icon style="width: 100px;height: 100px;color: red;font-size:100px;" content="tb-share-light"></icon>
                <text style="font-size: 30px;text-align:center;width: 100px;">分享</text>
            </div>
            <div style="flex-direction: row;justify-content: space-between;">
                <button class="buy-buttom " text="网上认购" model="yellow" borderRadius='0'></button>
                <button class="buy-buttom" text="立即咨询" model="red" borderRadius='0'></button>
            </div>
        </div>
        <icon class="navbar" content="tb-back-android" @click="back"></icon>
    </div>
</template>

<script>
    const eeui = app.requireModule('eeui');
    const stream = weex.requireModule('stream') || {};
    const modal = weex.requireModule('modal') || {};
    const API = 'https://api.unsplash.com/search/photos?page=1&query=ocean&orientation=landscape&client_id=8cd8d9f168aa2f3f57edfd5a883305df7f7ba96a9fb414231d77c244213efce8';
    const mmmm = app.requireModule('modal');

    export default {
        data () {
            return {
                imageList: [
                    { src: 'http://img2.imgtn.bdimg.com/it/u=2296151058,2315950536&fm=11&gp=0.jpg' },
                    { src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1938633178,3861272544&fm=26&gp=0.jpg' },
                    { src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3084942693,506713247&fm=26&gp=0.jpg' }
                ],
                page_size: 4,
                department: {
                    title: '汕尾恒大聘请首付',
                    price: '132000',
                    phone: '0880-3331223'
                }
            }
        },
        created: function() {
        },
        mounted () {
        },
        methods: {
            viewCode(str) {
                this.openViewCode(str);
            },
            goTo (path) {
                eeui.toast({
                    message: path,
                    gravity: "middle"
                });
            },
            push (file) {
                eeui.openPage({
                    url: file,
                    pageType: 'app'
                });
            },
            back () {
                eeui.closePage(null);
            }
        }
    };
</script>

<style>
    .app {
        flex: 1
    }

    .iconr {
        width: 100px;
        height: 100px;
        color: #ffffff;
    }

    .tabbar {
        width: 750px;
        flex: 1;
    }

    .page-content {
        width: 750px;
        padding-top: 0;
        padding-bottom: 0;
        align-items: center;
    }

    .content-text {
        font-size: 24px;
        padding: 20px;
    }

    .menu-text {
        font-size: 30px;
        padding: 40px;
        text-align:right;
        width: 750px;
        border-bottom-color: #e4e4e4;
        border-bottom-style: solid;
        border-bottom-width: 1px;
    }

    .page-navbar {
        width: 750px;
        height: 90px;
    }

    .page-navbar-title {
        color: #ffffff;
        font-size: 28px;
    }

    .page-content-image {
        width: 480px;
        height: 480px;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .city {
        color: #fff;
        font-size: 30px;
        line-height: 70px;

    }
    .arrown-down {
        color: #fff;
        width: 40px;
        height: 20px;
        font-size: 30px;
        line-height: 70px;
    }
    .feedbac-icon {
        color: #fff;
        width: 120px;
        height: 40px;
        font-size: 40px;
    }
    .input {
        margin-left: 20px;
        background-color: #fff;
        padding-left: 10px;
        border-width: 1px;
        height: 70px;
        font-size: 30px;
        line-height: 70px;
        color: #9c9a9a;
        border-radius: 10px;
        width: 490px;
        border-color: #2d63da;
    }

    .input-right {
        background-color: #fff;
        border-right-width: 1px;
        border-right-color: #2d63da;
        height: 70px;
        width: 105px;
        border-top-width: 1px;
        border-top-color: #2d63da;
        border-bottom-width: 1px;
        border-bottom-color: #2d63da;
        margin-right: 20px;
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
    }

    .flex {
        color: #fff;
        width: 120px;
        height: 100px;
        padding-left: 30px;
        flex-direction: row;
        justify-content: center;
        align-items: center;    
    }
    .marquee {
        height: 60px;
        background-color: #fff;
        padding-left: 20px;
    }
    .banner {
        width: 750px;
        height: 420px;
    }

    .banner-frame {
        width: 750px;
        height: 420px;
        position: relative;
    }

    .banner-image {
        width: 750px;
        height: 420px;
    }
    .grid {
        width: 750px;
        height: 180px;
    }

    .grid-item {
        width: 150px;
        height: 180px;
        align-items: center;
    }

    .item-image {
        background-color: #3e9636;
        font-size: 60px;
        margin-top: 10px;
        color: #fff;
        width: 120px;
        height: 120px;
        border-radius: 40%;
    }

    .item-title {
        width: 250px;
        height: 50px;
        line-height: 50px;
        text-align: center;
    }

    .myhouse {
        text-align: left;
        width: 750px;
        margin-top: 25px;
        padding: 15px 50px;
        font-size: 30px;
    }
    .all-house {
        width:600x;
        padding:15px 50px;
        font-size: 30px;
    }
    .house-div {
        flex-direction: row;
        justify-content: center;
        align-items: center;  
        width: 750px;
        height: 200px;
    }
    .house-msg {
        width: 650px;
        height: 200px;
        border-width: 1px;
        border-radius: 20px;
        border-color: #20c08d;
        flex-direction: column;
        justify-content: center;
        align-items: center; 
    }
    .house-text {
        padding: 50px;
        height: 112px;
        font-size: 24px;
        margin-bottom: 30px;
    }
    .button {
        font-size: 30px;
        width: 650px;
        height: 60px;
        color: #20c08d;
        margin: 0;
        border-width: 1px;
        border-radius: 20px;
        border-color: #20c08d;
    }
    .buy-buttom {
        width: 200;
        height: 150px;
        border: none;
    }
    .list {
        width: 750px;
        flex: 1
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
    .msg-item {
        width: 750px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom-color: #e4e4e4;
        border-bottom-style: solid;
        border-bottom-width: 1px;
    }

    .house-info {
        width: 520px;
        height: 180px;
        flex-direction: column;
        justify-content: center;
    }
    .msg-info {
        width: 600px;
        height: 160px;
        flex-direction: column;
        justify-content: center;
    }
    .msg-text {
        color: #666666;
    }
    .house-type {
        margin-top: 25px;
        width: 750px;
        height: 60px;
        flex-direction: row;
        justify-content:flex-end;
    }

    .type-button {
        width: 72px;
        padding: 10px;
        color:#2d63da;
        font-size: 26px;
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
    .avatar-img {
        width: 120px;
        height: 120px;
        border-radius: 60px;
        margin-left: 15px;
    }
    .msg-name-time {
        height: 80px;
        align-items: center;
        padding-top: 30px;
        flex-direction: row;
        justify-content: space-between;
    }

    .navbar {
        width: 100px;
        height: 100px;
        position: absolute;
        top: 0;
        left: 0;
        color: #fff;
    }
</style>