<template>
    <div>
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
                <p><a href="">Create a new account</a></p>
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
        signIn(){
            alert(this.username + this.password);
        }
    }
}
</script>


<style>
.center-box {
    border: 1px solid black;
    width: 629px;
    height: 470px;
    margin: 25vh auto;
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

.text-container {
    margin: 2em 20%;
    font-size: medium;
}


form {
    height: 40%;
}

</style>
