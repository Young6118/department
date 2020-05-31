<template>
    <div class="app">
        <div v-if="showForm === 1" class="app" style="background-color: #fff;">
            <div style="width:750px;margin-bottom: 40px;">
                <text style="margin-left: 100px;font-size: 50px;font-weight: bold;">
                    {{ isRegister ? textSignIn : text }}
                </text>
            </div>
            <div class="flex-input">
                <icon class="iconr" content="tb-people"></icon>
                <input :autofocus="true" v-model="user.name" class="input" placeholder="用户名" type="text"/>
            </div>
            <div class="flex-input" style="margin-top: 30px;">
                <icon class="iconr" content="tb-lock"></icon>
                <input type="password" v-model="user.password" class="input" :placeholder="isRegister ? '请输入密码，7位以上' : '请输入密码'"/>
            </div>
            <button v-if="isRegister" :disabled="!validate" style="width: 700px;height: 90px;margin-top: 60px;" text="注册账号" backgroundColor="#6abaff" @click="submit('register')" borderRadius="30" :loading="loading"></button>
            <button v-else :disabled="!validate" style="width: 700px;height: 90px;margin-top: 60px;" text="登录账号" backgroundColor="#6abaff" @click="submit('login')" borderRadius="30" :loading="loading"></button>
            <div v-if="!isRegister" style="flex-direction: row;">
                <text style="margin-top: 50px;font-size: 25px;text-align: left;width:140px;margin-left: 50px;">没有账号？</text>
                <text style="margin-top: 50px;font-size: 25px;text-align: left;width:600px;color: #6abaff;" @click="isRegister=true">立即注册</text>
            </div>
        </div>
        <div v-else-if="showForm === 2" style="background-color:#8E8F90;width:750px;" class="app">
            <div style="background-color: #fff;height: 800px;width: 600px;align-items: center;">
                <div style="width:600px;background-color: #6abaff;height: 400px;align-items: center;justify-content:center;">
                    <icon style="width: 150px;height: 150px;color:#fff;font-size:150px;" content="ios-checkmark-circle"></icon>
                </div>
                <text style="font-size: 30px;width:330px;line-height:30px;margin-left:-90px;margin-top: 60px;">
                    您已注册成功!
                </text>
                <button style="width: 400px;height: 90px;margin-top: 60px;" backgroundColor="#6abaff" @click="goLogin(1, false)" text="点击去登录">
                </button>
            </div>
        </div>
        <div v-else-if="showForm === 3" style="background-color:#8E8F90;width:750px;" class="app">
            <div style="background-color: #fff;height: 800px;width: 600px;align-items: center;">
                <div style="width:600px;background-color: #6abaff;height: 400px;align-items: center;justify-content:center;">
                    <icon style="width: 150px;height: 150px;color:red;font-size:150px;" content="ios-close-circle"></icon>
                </div>
                <text style="font-size: 30px;width:460px;line-height:30px;margin-left:-90px;margin-top: 60px;">
                    注册失败，请检查网络!
                </text>
                <button style="width: 400px;height: 90px;margin-top: 60px;" backgroundColor="#6abaff" @click="goLogin(1, true)" text="点击重新注册">
                </button>
            </div>
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
                showForm: 1,
                user: {
                    name: '',
                    password: ''
                },
                loading: false,
                isRegister: false,
                text: '账号登录',
                textSignIn: '账号注册',
            }
        },
        mounted () {

        },
        computed : {
            validate: function () {
                return this.user.name && this.user.password.length > 7
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
                        this.loading = true;
                        setTimeout(() => {
                            this.loading = false
                            this.goLogin(2, false)
                            this.user.password = ''
                        }, 1000)
                        break;
                }
            },
            goLogin (num, reg) {
                this.showForm = 0
                this.$nextTick(res => {
                    this.showForm = num
                })
                this.isRegister = reg
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