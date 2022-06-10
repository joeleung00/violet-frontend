<template>
    <div :class="['body', showSidebar ? '': 'no-sidebar']">
        <nav>
            <Navigation @pressSidebarBtn="toggleSidebar" />
        </nav>

        <aside v-if="showSidebar">
            <Sidebar/>
        </aside>

        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
    components: {Navigation, Sidebar},
    data() {
        return {
            showSidebar: true
        }
    },
    methods: {
        toggleSidebar(){
            this.showSidebar = !this.showSidebar
        }
    }
}

</script>


<style scoped>

.body {
    min-height: 100vh;
    min-width: 100%;
    display: grid;
    grid-template-rows: 60px 1fr;
    grid-template-columns: 240px 1fr;
    grid-template-areas: "nav nav"
                        "sidebar content";

}

.no-sidebar {
    grid-template-areas: "nav nav"
                        "content content";
}

nav {
    grid-area: nav;
}

aside {
    grid-area: sidebar;
}

main {
    grid-area: content;
    outline: 1px solid rgba(200, 200, 200, 0.4);
}

</style>