<template>
    <div>
        <div class="top">
            <h1 class="logo">Violet</h1>
            <p>An application to save and translate your favourite articles.</p>
        </div>
        <div class="center-box">
            <h3>Login</h3>
            <form @submit.prevent="signIn">
                <NormalInput placeholder="Username" v-model:value="username" iconName="userIcon.svg" type="text"/>
                <PasswordInput placeholder="Password" v-model:value="password" iconName="passwordLock.svg"/>
                <div class="btn-container">
                    <div class="btn-center">
                        <button>Sign In</button>    
                    </div>
                </div>
            </form>
            <div class="text-container">
                <p><router-link to="/register">Create a new account</router-link></p>
                <p><a href="">Forget password?</a></p>
            </div>
        </div>
    </div>
</template>

<script>
import NormalInput from '@/components/NormalInput.vue';
import PasswordInput from '@/components/PasswordInput.vue';

export default {
    components: {
    NormalInput,
    PasswordInput
},
    data: function(){
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        async signIn(){
            let userForm = new FormData()
            userForm.append('username', this.username)
            userForm.append('password', this.password)
            try {
                let res = await this.$store.dispatch('Login', userForm)
                this.$router.push("/")
            }
            catch (e) {
                this.$myAlert(e)
            }
        }
    }
}
</script>


<style scoped>
.logo {
    font-size: 5rem;
    color: #A771A3;
    font-family: 'Dancing Script', cursive;
    margin: 10rem auto 0 auto;
}

.top {
    text-align: center;
}

.top > p {
    color: grey;
}

.center-box {
    border: 1px solid black;
    width: 629px;
    height: 470px;
    margin: 0 auto;
}

h3 {
    margin: 8% 20% 3% 20%;
    font-weight: 300;
    font-size: 30px;
}


.btn-container {
    margin-top: 1.5em;
    height: 10%;
    position: relative;
}

.btn-center {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.btn-center > button{
    border-radius: 15px;
    width: 98px;
    height: 37px;
    border: 2px solid #AA5CB2;
    background-color: white;
    color: #AA5CB2;
}

.btn-center > button:hover {
    cursor: pointer; 
}

.text-container {
    margin: 2em 20%;
    font-size: medium;
}


form {
    height: 40%;
}

</style>
