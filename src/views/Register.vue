<template>
    <div id="app">
        <div class="center-box">
            <h3>Create New Account</h3>
            <form @submit.prevent="createAccount">
                <NormalInput placeholder="Fullname" 
                    v-model:value="fullname" 
                    iconName="userIcon.svg" 
                    type="text"/>
                <NormalInput placeholder="Username" 
                    v-model:value="username" 
                    iconName="userIcon.svg" 
                    type="text"/>

                <NormalInput placeholder="Email" 
                    v-model:value="email" 
                    iconName="emailIcon.svg" 
                    type="email"/>
                
                <PasswordInput placeholder="Password"
                    v-model:value="password"
                    iconName="passwordLock.svg"/>

                <PasswordInput placeholder="Confirm Password"
                    v-model:value="confirmedPassword"
                    iconName="passwordLock.svg"/>

                <div class="btn-container">
                    <div class="btn-center">
                        <button @click="createAccount" v-on:keydown.enter="createAccount">Create</button>    
                    </div>
                </div>
            </form>
        </div>

    </div>
</template>

<script>
import NormalInput from '@/components/NormalInput.vue';
import PasswordInput from '@/components/PasswordInput.vue';

export default {
    data: function () {
        return {
            fullname: "",
            email: "",
            username: "",
            password: "",
            confirmedPassword: "",
        };
    },
    methods: {
        createAccount() {
            alert(`
                ${this.fullname}
                ${this.email}
                ${this.username}
                ${this.password}
                ${this.confirmedPassword}
            `);
        }
    },
    components: { NormalInput, PasswordInput }
}
</script>


<style>

.center-box {
    border: 1px solid black;
    width: 629px;
    height: 612px;
    margin: 15vh auto;
}

h3 {
    margin: 15% 20% 5% 20%;
    font-weight: 300;
    font-size: 30px;
}

form {
    height: 70%;
}

.btn-container {
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

</style>
