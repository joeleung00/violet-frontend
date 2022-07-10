<template>
    <div class="nav">
        <span>
            <button class="sidebar-btn" @click="$emit('pressSidebarBtn')">
                <img src="/images/sidebarIcon.svg" alt="sidebar icon">
            </button>
            <router-link to="/articles"><h2 class="logo">Violet</h2></router-link>
        </span>
        <span>
            <router-link :to="{name: 'Add'}">
                <button class="add-btn">
                    <img src="/images/addBtn.svg" alt="Add Button">
                </button>
            </router-link>
            <button class="exit-btn" @click="logout">
                <img src="/images/exitIcon.svg" alt="Exit Icon">
                <p>Logout</p>
            </button>
        </span>
    </div>
</template>

<script>
export default {
    methods: {
        logout(){
            this.$myConfirm(
                'Are you sure to logout?',
                ''
            ).then( result => {
                if (result.isConfirmed){
                    this.$store.dispatch('Logout')
                    .then(() => {this.$router.push("/login")})
                }
            })
        }
    }
}

</script>


<style>

.logo {
    font-size: 2rem;
    padding-left: 2rem;
    color: #A771A3;
    font-family: 'Dancing Script', cursive;
}

.nav {
    display: flex;
    justify-content: space-between;
    background-color: white;
}

.sidebar-btn {
    vertical-align: middle;
    margin: 0px;
    background: none;
    border: none;
    padding: 20px;
}

.sidebar-btn > img {
    width: 1.25rem;
}

.sidebar-btn:hover {
    cursor: pointer;
    background: rgba(200, 200, 200, 0.4);
}

.logo {
    display: inline-block;
    margin: 10px;
    position: relative;
    top: 0.2em;

}

.add-btn {
    margin-right: 50px;
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
    padding: 0.4rem;
    vertical-align:middle;
    background: none;
    border: none;
    display: inline-block;
}

.add-btn > img{
    width: 2rem;
}

.add-btn:hover {
    cursor: pointer;
    background: rgba(200, 200, 200, 0.4);
}

.exit-btn{
    margin-right: 2.5rem;
    border: none;
    background-color: white;
    border-radius: 5px;
}


.exit-btn:hover {
    background: rgba(200, 200, 200, 0.4);
    cursor: pointer;
}

.exit-btn > img {
    width: 1.6rem;
    vertical-align:middle;
}

.exit-btn > p{
    margin-left: 0.5rem;
    color: #A771A3;
    display: inline-block;
}

</style>