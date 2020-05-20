<template>
    <div class="app">
        <tabbar
                ref="reflectName"
                class="tabbar"
                preload="false"
                :eeui="{ tabType: 'bottom' }"
                @pageSelected="pageSelected"
                @tabReselect="tabReselect">

            <!--页签①-->
            <tabbar-page ref="name_1"
                @refreshListener="refreshListener"
                :eeui="{ tabName: 'name_1', title:'首页', selectedIcon:'md-home' }">
                <navbar class="page-navbar">
                    <navbar-item type="left" class="flex" @click="citypicker">
                        <text class="city">{{ location.city.slice(0, 2) }}</text>
                        <icon class="arrown-down" :eeui="{content: 'ios-arrow-down'}"></icon>
                    </navbar-item>
                    <navbar-item type="title">
                        <text class="input" @click="push('component_search.js')">丈八北路 | 西二旗 | 张江地铁站</text>
                    </navbar-item>
                    <navbar-item type="right">
                        <text class="input-right" @click="push('component_search.js')"></text>
                    </navbar-item>
                </navbar>
                <div class="page-content">
                    <marquee
                        @click="goTo('前往热搜页面')"
                        ref="reflectName"
                        class="marquee"
                        style="width:750px;height:50px;font-size:24px"
                        :text="scrollText"
                    ></marquee>
                    <banner class="banner" @itemClick="itemClick">
                        <div class="banner-frame" v-for="img in imageList">
                            <image class="banner-image" resize="cover" :src="img.src"></image>
                        </div>
                    </banner>
                    <grid class="grid" :divider="false" columns="5" row="1" :indicatorShow="false">
                        <div class="grid-item" v-for="(item, index) in gridLists" :key="index">
                            <icon class="item-image" :eeui="{ content: item.icon }"></icon>
                            <text class="item-title">{{item.title}}</text>
                        </div>
                    </grid>
                    <text class="myhouse">我的房子</text>
                    <div class="house-div">
                        <div class="house-msg">
                            <text class="house-text">选择心仪的房源，实时关注房价估值走势，随时掌握小区均价和邻里动态</text>
                            <button class="button" text="立即查看" model="white"></button>
                        </div>
                    </div>
                    <div class="house-type">
                        <text class="all-house" @click="push('index.js')">为您推荐  ➤ </text>
                        <button class="type-button" text="城市" model="white"></button>
                        <button class="type-button" style="margin-right: 10px;" text="类型" model="white"></button>
                    </div>
                    <scroll-view
                        ref="reflectName"
                        class="list"
                        :eeui="{
                                pullTips: true,
                                scrollBarEnabled: false
                            }"
                        @itemClick="itemClick"
                        @pullLoadListener="pullLoadListener"
                        @refreshListener="refreshListener2">
                        <div class="panel" v-for="num in lists">
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
            </tabbar-page>


            <!--页签②-->
            <tabbar-page ref="name_2" @refreshListener="refreshListener"
                         :eeui="{ tabName: 'name_2', title:'消息', message:0, selectedIcon:'ios-chatboxes' }">
                <navbar class="page-navbar">
                    <navbar-item type="title">
                        <text class="page-navbar-title">消息</text>
                    </navbar-item>
                    <navbar-item type="right">
                        <icon class="feedbac-icon" @click="goTo('前往用户反馈页面')" :eeui="{content: 'ios-headset'}"></icon>
                    </navbar-item>
                </navbar>
                <div class="page-content">
                    <div class="msg-item" @click="push('plugin_rongim')">
                        <image class="avatar-img" resize="cover" src="https://ke-image.ljcdn.com/110000-inspection/pc1_CUm3KlMXl.jpg.280x210.jpg"></image>
                        <div class="msg-info">
                            <div class="msg-name-time">
                                <text style="height: 45px;width: 120px;font-size: 30px;">薛之谦</text>
                                <text style="height: 45px;width: 110px;">晚上1111</text>
                            </div>
                            <text class="msg-text">刚刚看到vr看房，哼酷炫asdf空肥？</text>
                        </div>
                    </div>
                </div>
            </tabbar-page>

            <!--页签③-->
            <tabbar-page ref="name_3" @refreshListener="refreshListener"
                         :eeui="{ tabName: 'name_3', title:'福利', dot:true, selectedIcon:'md-gift' }">
                <navbar class="page-navbar">
                    <navbar-item type="title">
                        <text class="page-navbar-title">福利中心</text>
                    </navbar-item>
                </navbar>
                <div class="app">
                    <scroller class="scroller">
                    <web-view ref="infoView" class="webview"> </web-view>
                       </scroller>
                </div>
            </tabbar-page>

            <!--页签④-->
            <tabbar-page ref="name_4" @refreshListener="refreshListener"
                         :eeui="{ tabName: 'name_4', title:'我的', message:0, selectedIcon:'md-person' }">
                <navbar class="page-navbar">
                    <navbar-item type="title">
                        <text class="page-navbar-title">我的</text>
                    </navbar-item>
                    <navbar-item type="right" @click="viewCode('component/tabbar')">
                        <icon class="icon" :eeui="{ content: 'md-settings' }"></icon>
                    </navbar-item>
                </navbar>
                <div class="page-content">
                    <div style="flex-direction: row;width:750px;">
                        <image class="avatar-img" style="margin-top: 40px;margin-right: 50px;" resize="cover" src="https://ke-image.ljcdn.com/110000-inspection/pc1_CUm3KlMXl.jpg.280x210.jpg"></image>
                        <text style="line-height: 200px;font-size: 50px;">WangWanWan</text>
                    </div>
                    <text v-for="(item, index) in menuList" :key="index" class="menu-text">{{ item.title }}</text>
                </div>
            </tabbar-page>

        </tabbar>

    </div>
</template>

<script>
    const eeui = app.requireModule('eeui');
    const stream = weex.requireModule('stream') || {};
    const modal = weex.requireModule('modal') || {};
    const API = 'https://api.unsplash.com/search/photos?page=1&query=ocean&orientation=landscape&client_id=8cd8d9f168aa2f3f57edfd5a883305df7f7ba96a9fb414231d77c244213efce8';
    const mmmm = app.requireModule('modal');
    const citypicker = app.requireModule('citypicker');

    export default {
        data () {
            return {
                scrollText: "🔥热搜   恒大绿洲  世纪华阳  东方金典  碧桂园  绿地  丈八北路   👉👉👉",
                imageList: [
                    { src: 'http://img2.imgtn.bdimg.com/it/u=2296151058,2315950536&fm=11&gp=0.jpg' },
                    { src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1938633178,3861272544&fm=26&gp=0.jpg' },
                    { src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3084942693,506713247&fm=26&gp=0.jpg' }
                ],
                gridLists: [{
                    icon: "tb-money-bag",
                    title: '邀请注册'
                }, {
                    icon: "tb-shop",
                    title: '网上认购'
                }, {
                    icon: "tb-people-list",
                    title: "我的推荐"
                }, {
                    icon: "tb-list",
                    title: "我的成交"
                }, {
                    icon: "ios-apps",
                    title: "更多"
                }],
                lists: [],
                menuList: [
                    {
                        title: '意见反馈',
                        file: ''
                    },
                    {
                        title: '分享应用',
                        file: ''
                    },
                    {
                        title: '检查更新',
                        file: ''
                    },
                    {
                        title: '关于我们',
                        file: ''
                    },
                ],
                page_size: 4,
                location: {
                    province: '河南省',
                    city: '洛阳市',
                    area: '宜阳县'
                }
            }
        },
        created: function() {
            // const self = this;
            // stream.fetch({
            //     method: 'GET',
            //     url: API,
            //     type:'json'
            // }, function (ret) {
            //     if (!ret.ok) {
            //         modal.toast({
            //             message: 'Network Error!',
            //             duration: 3
            //         });
            //     } else {
            //         self.posts = self.posts.concat(ret.data.results);
            //     }
            // });
        },
        mounted () {
            for (let i = 1; i <= this.page_size; i++) {
                this.lists.push(i);
            }
            this.$refs.reflectName.setHasMore(true);
            this.$refs.infoView.setUrl('https://www.yuque.com/zhouyang-kk2um/mfgvkg');
            this.$refs.infoView.canGoBack();
            // this.$refs.infoView.setJavaScript(`
            //     var style = document.createElement('style')
            //     style.type = 'text/css'
            //     var textNode = document.createTextNode(".m-book-header, .slogan, .footer { display: none; }")
            //     style.appendChild(textNode)
            //     document.body.appendChild(style)
            // `);
        },
        methods: {
            viewCode(str) {
                this.openViewCode(str);
            },
            pageSelected(params) {
                eeui.toast({
                    message: "切换到第" + (params.position + 1) + "个标签页",
                    gravity: "middle"
                });
            },
            tabReselect(params) {
                eeui.toast({
                    message: "第" + (params.position + 1) + "个标签页被再次点击",
                    gravity: "middle"
                });
            },
            refreshListener(params) {
                setTimeout(() => {
                    eeui.toast({
                        message: "刷新成功：" + params.tabName,
                        gravity: "middle"
                    });
                    this.$refs[params.tabName].refreshEnd();
                }, 10);
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
            itemClick(res) {
                mmmm.toast({
                    message: "点击" + (res.position + 1) + "项",
                    duration: 0.3
                })
                this.push('component_department')
            },
            pullLoadListener() {
                let count = this.lists.length;
                if (count >= 30) {
                    this.$refs.reflectName.setHasMore(false);
                    return;
                }
                setTimeout(() => {
                    for (let i = 1; i <= this.page_size; i++) {
                        this.lists.push(count + i);
                    }
                    this.$refs.reflectName.pullloaded();
                    eeui.toast("加载" + (count + 1) + "~" + this.lists.length + "数据成功");
                }, 1000);

            },
            refreshListener2() {
                let newList = [];
                for (let i = 1; i <= this.page_size; i++) {
                    newList.push(i);
                }
                setTimeout(() => {
                    this.lists = newList;
                    this.$refs.reflectName.setHasMore(true);
                    this.$refs.reflectName.refreshed();
                    eeui.toast("刷新数据成功");
                }, 1000);

            },
            openPage4() {
                eeui.openPage({
                    url: 'https://www.yuque.com/zhouyang-kk2um/mfgvkg',
                    pageType: 'web',
                });
            },
            citypicker() {
                if (typeof citypicker === 'undefined') {
                    eeui.alert({
                        title: '温馨提示',
                        message: "检测到未安装citypicker插件，安装详细请登录https://eeui.app/",
                    });
                    return;
                }
                citypicker.select({
                    province: this.location.province,
                    city: this.location.city,
                    area: this.location.area
                }, (result) => {
                    this.location.province = result.province;
                    this.location.city = result.city;
                    this.location.area = result.area;
                });
            }
        }
    };
</script>

<style>
    .app {
        width: 750px;
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
    .webview {
        flex: 1;
    }
</style>