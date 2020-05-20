<template>
    <div class="app">

        <navbar class="navbar">
            <navbar-item type="back"></navbar-item>
            <navbar-item type="title">
                <text class="title">聊天 {{ info.status }}</text>
            </navbar-item>
            <navbar-item type="right" @click="viewCode('markets/eeui/rongim')">
                <icon content="md-code-working" class="iconr"></icon>
            </navbar-item>
        </navbar>

        <div class="content">
            <text class="info"></text>
            <scroll-view
                ref="reflectName"
                class="list"
                pullTips="false">
                    <div class="panel" v-for="(item, index) in lists" :key="index">
                        <div class="panel-item">
                            <image style="width:30px;height:30px" :src="item.avatar"></image>
                            <text class="panel-text">{{item.user}}</text>
                            <text class="panel-text">{{item.text}}</text>
                            <text class="panel-text">{{item.time}}</text>
                        </div>
                    </div>
        </scroll-view>
        <div class="flex-input">
            <input :autofocus="true" v-model="msg" class="input" placeholder="输入文字点击发送" type="text"/>
            <icon class="icon" :eeui="{ content: 'md-send' }" @click="sendMsg"></icon>
        </div>
        </div>

    </div>
</template>

<script>
    const eeui = app.requireModule('eeui');
    const rongim = app.requireModule('eeui/rongim');
    const ranNum = (m,n) => {
        const num = Math.floor(Math.random()*(m - n) + n);
    　　return num
    }
    export default {
        data() {
            return {
                info: '',
                roomInfo: '',
                lists: [],
                msg: '',
                userInfo: {
                    avatar: 'https://www.baidu.com/img/baidu_resultlogo@2.png',
                    username: '测试',
                    userid: ranNum(1, 100)
                }
            }
        },
        mounted () {
            this.login()
            this.$refs.reflectName.setHasMore(true);
            this.getAll()
        },
        beforeDestroy: function () {
            rongim.quitChatRoom(() => {
                rongim.logout()
                rongim.removeEventHandler()
            })
        },
        methods: {
            getAll () {
                    this.lists = []
                    rongim.addEventHandler(res => {
                        const now = new Date()
                        console.log(res)
                        this.lists.push({
                            avatar: res.userimg,
                            user: res.username + res.userid,
                            text: res.body,
                            time: `${now.getFullYear()}/${(now.getMonth()+1).toString().padStart(2, '0')}/${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`
                        })
                    })
            },
            viewCode(str) {
                this.openViewCode(str);
            },
            itemClick(params) {
                eeui.toast("点击了" + (params.position + 1) + "项，可以引用回复");
            },
            login() {
                if (typeof rongim === 'undefined') {
                    eeui.alert({
                        title: '温馨提示',
                        message: "检测到未安装rongim插件，安装详细请登录https://eeui.app/",
                    });
                    return;
                }
                eeui.loading();
                rongim.login({
                    userid: this.userInfo.userid,
                    username: this.userInfo.username,
                    userimg: this.userInfo.avatar,
                }, (result) => {
                    eeui.loadingClose();
                    this.info = result;
                    rongim.joinChatRoom(1314521, 50, res => {
                        this.roomInfo = res
                    })
                });
            },
            pullLoadListener() {
                let count = this.lists.length;
                if (count >= 100) {
                    this.$refs.reflectName.setHasMore(false);
                    return;
                }
                setTimeout(() => {
                    for (let i = 1; i <= 20; i++) {
                        this.lists.push(count + i);
                    }
                    this.$refs.reflectName.pullloaded();
                    eeui.toast("加载" + (count + 1) + "~" + this.lists.length + "数据成功");
                }, 1000);

            },
            refreshListener() {
                let newList = [];
                for (let i = 1; i <= 20; i++) {
                    newList.push(i);
                }
                setTimeout(() => {
                    this.lists = newList;
                    this.$refs.reflectName.setHasMore(true);
                    this.$refs.reflectName.refreshed();
                    eeui.toast("刷新数据成功");
                }, 1000);

            },
            sendMsg () {
                if (this.msg) {
                    rongim.sendTextMessage(this.msg, res => {
                        if (res.status === 'success') {
                            const now = new Date()
                            this.lists.push({
                                avatar: this.userInfo.avatar,
                                user: this.userInfo.username + this.userInfo.userid,
                                text: this.msg,
                                time: `${now.getFullYear()}/${(now.getMonth()+1).toString().padStart(2, '0')}/${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`
                            })
                            this.msg = ''
                        } else {
                            eeui.toast("发送失败");
                        }
                    })
                }

            }
        }
    };
</script>


<style>
    .app {
        width: 750px;
        flex: 1;
    }

    .navbar {
        width: 750px;
        height: 100px;
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

    .content {
        flex: 1;
        justify-content: center;
        align-items: center;
    }

    .info {
        font-size: 22px;
        margin-bottom: 20px
    }

    .button {
        font-size: 24px;
        text-align: center;
        margin-top: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        width: 220px;
        color: #ffffff;
        background-color: #00B4FF;
    }
     .list {
        width: 750px;
        flex: 1
    }
    .panel {
        width: 750px;
        height: 35px;
    }
    .panel-item {
        width: 700px;
        height: 30px;
        flex-direction: row;
        justify-content: space-between;
    }
    .panel-text {
        font-size: 30px;
        text-align: center;
    }
    .flex-input {
        flex-direction: row;
        width: 750px;
        height: 90px;
        justify-content: space-between;
    }

    .input {
        margin-left: 20px;
        background-color: #fff;
        padding-left: 20px;
        border-width: 1px;
        height: 70px;
        font-size: 30px;
        border-radius: 10px;
        width: 600px;
        border-color: #2d63da;
    }

    .icon {
        width: 60px;
        height: 70px;
        margin-right: 30px;
        font-size: 67px;
    }
</style>