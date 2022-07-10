import axios from "axios"
import { Buffer } from 'buffer'
import Utils from '@/utils/utils.js'

const state = {
  user: null,
};

const getters = {
    isAuthenticated: (state) => !!state.user,
    getUser: (state) => state.user,
};

const actions = {
    async Login({commit}, userForm) {
        let res = await axios({
            method: 'post',
            url: '/login',
            data: userForm,
        })  
        if (!Utils.isLoginSucess(res.headers)){
            return Promise.reject("Incorrect username or password")
        }
        commit("setUser",  res.data);
    },

    async Logout({ commit }) {
        await axios.post("/logout")
        let user = null;
        commit("logout", user);
    },
};

const mutations = {
    setUser(state, user) {
        state.user = user;
    },

    logout(state, user) {
        state.user = user;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};