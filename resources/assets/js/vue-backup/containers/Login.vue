<template>
    <div class="login pt-4">
        <div>
            <div class="panel">
                <progress class="progress" max="100"></progress>
                <div class="panel-header">
                </div>
                <nav class="panel-nav">
                    <ul class="tab tab-block">
                        <li class="tab-item" :class="{'active':isLogIn}">
                            <a href="#" @click="changeSection()">
                                Login
                            </a>
                        </li>
                        <li class="tab-item" :class="{'active': !isLogIn}">
                            <a href="#" @click="changeSection()">
                                Signup
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="panel-body">
                    <!-- Login form -->
                    <form v-on:submit.prevent="login({email, password})" v-if="isLogIn">
                        <!-- form input control -->
                        <div class="form-group pt-10 pb-10" :class="{'has-error': errors.has('member_firstname') }">
                            <input class="form-input" v-model="email" type="email" id="email" placeholder="email" />
                        </div>
                        <div class="form-group pb-10">
                            <input class="form-input" v-model="password" type="password" id="password" placeholder="password" />
                        </div>
                            <button class="btn btn-action circle"><i class="icon icon-arrow-right"></i></button>
                    </form>

                    <!-- Sign up form -->
                    <form v-on:submit.prevent="signup()" v-else>
                        <div class="form-group pt-10 pb-10" :class="{'has-error': errors.has('email')}">
                            <input class="form-input" v-validate="'required|email'" name="email" v-model="email" type="email" id="email" placeholder="email" />
                             <p class="form-input-hint" v-show="errors.has('email')">{{ errors.first('email') }}</p>
                        </div>

                        <div class="form-group pb-10" :class="{'has-error' : errors.has('password')}">
                            <input class="form-input" v-validate="'required|min:6|confirmed:confirm_password'" name="password" v-model="password" type="password" id="password" placeholder="password" />
                            <p class="form-input-hint" v-show="errors.has('password')"> {{ errors.first('password') }} </p>
                        </div>

                        <div class="form-group pb-10" :class="{'has-error': errors.has('password')}">
                            <input class="form-input" name="confirm_password" type="password" id="confirm_password" placeholder="password" />
                        </div>

                        <button :disabled="errors.any()" class="btn btn-primary">Sign Up</button>
                    </form>
                </div>
                <div class="panel-footer">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'login',
    //default form values
    data() {
        return {
            email: '',
            password: '',
            isLogIn: true
        }
    },
    methods: {
        login(values) {
        },
        changeSection() {
            this.isLogIn = this.isLogIn ? false : true
        },
        signUp() {
        }
    },
    created() {
        
    }
}
</script>
