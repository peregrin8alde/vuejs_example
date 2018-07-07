<template>
  <v-app>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <router-link
          v-for="(item, i) in items"
          :key="item.title"
          :to="{ name: item.linkName }"
        >
          <v-list-tile>
            <v-list-tile-action>
              <v-icon v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
      dark
      color="primary"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      
      <v-spacer></v-spacer>
      
      <v-menu bottom left>
        <v-btn
          slot="activator"
          dark
          icon
        >
          <v-icon>account_circle</v-icon>
        </v-btn>
                  
        <v-list>
          <v-list-tile
            v-for="(item, i) in menuItems"
            :key="i"
            @click=""
          >
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        { title: 'Dashboard', icon: 'dashboard', linkName: 'Home' },
        { title: 'Settings', icon: 'settings', linkName: 'Settings' },
        { title: 'Admin', icon: 'gavel', linkName: 'Home' }
      ],
      menuItems: [
        { title: 'Dashboard'},
        { title: 'Settings'},
        { title: 'Sign In'},
        { title: 'Sign Out'}
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
