<template>
    <div class="app">
        <div class="flex-input">
            <icon class="iconr" content="tb-people"></icon>
            <input :autofocus="true" v-model="msg" class="input" placeholder="用户名" type="text"/>
        </div>
        <div class="flex-input" style="margin-top: 30px;">
            <icon class="iconr" content="tb-lock"></icon>
            <input type="password" v-model="msg" class="input" placeholder="密码"/>
        </div>
        <button v-if="isRegister" style="width: 700px;height: 90px;margin-top: 60px;" text="注册" backgroundColor="#6abaff" @click="submit('login')" borderRadius="30" :loading="loading"></button>
        <button v-else style="width: 700px;height: 90px;margin-top: 60px;" text="登陆" backgroundColor="#6abaff" @click="submit('login')" borderRadius="30" :loading="loading"></button>
        <div v-if="!isRegister" style="flex-direction: row;">
            <text style="margin-top: 50px;font-size: 25px;text-align: left;width:140px;margin-left: 50px;">没有账号？</text>
            <text style="margin-top: 50px;font-size: 25px;text-align: left;width:600px;color: #6abaff;" @click="isRegister=true">立即注册</text>
        </div>
    </div>
</template>

<script>
    const eeui = app.requireModule('eeui');
    const ranNum = (m,n) => {
        const num = Math.floor(Math.random()*(m - n) + n);
    　　return num
    }
    export default {
        data() {
            return {
                user: {
                    name: '',
                    password: ''
                },
                loading: false,
                isRegister: false
            }
        },
        mounted () {

        },
        computed : {
            buttomDisabled: function () {
                return this.user.name && this.user.password
            }
        },
        methods: {
            submit (command) {
                switch (command) {
                    case 'login':
                        console.log('登录')
                        this.loading = true;
                        setTimeout(() => {
                            this.loading = false
                            eeui.openPage({
                                url: 'component_tabbar.js',
                                pageType: 'app'
                            });
                        }, 1000)
                        break;
                    case 'register':
                        console.log('注册')
                        break;
                }
            }
        }
    };
</script>


<style>
    .app {
        width: 750px;
        flex: 1;
        align-items: center;
        justify-content: center;
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
    }
    .input {
        margin-left: 20px;
        background-color: #fff;
        padding-left: 20px;
        border-width: 1px;
        height: 100px;
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