<template>
  <v-app
  :dark="darkModeHandler"
  id="inspire"
  :class="[{ 'customizer-in': customizerIn, 'box-layout': boxLayoutHandler, 'collapse-sidebar': collapseSidebarHandler, 'rtl-layout': rtlLayoutHandler}]"
  >
    <template>
      <router-view></router-view>
    </template>

  </v-app>
</template>

<script>
import EventBus from './lib/eventBus'
export default {
  data () {
    return {
      loading: true, // page loading
      darkMode: false, // dark mode
      customizer: false, // customizer
      boxLayout: false, // box layout mode
      collapseSidebar: false, // collapse sidebar
      defaultSidebar: '',
      rtlLayout: false
    }
  },
  computed: {
    // computed property to get the state of dark mode
    darkModeHandler () {
      EventBus.$on('darkMode', payload => {
        this.darkMode = payload
      })
      return this.darkMode
    },
    // computed property to get the state of boxlayout event
    boxLayoutHandler () {
      EventBus.$on('boxLayout', payload => {
        this.boxLayout = payload
      })
      return this.boxLayout
    },
    collapseSidebarHandler () {
      EventBus.$on('collapseSidebar', payload => {
        this.collapseSidebar = payload
      })
      return this.collapseSidebar
    },
    pageLoading () {
      var self = this
        self.loading = false
      return self.loading
    },
    // computed property to get the state of customizer
    customizerIn () {
      EventBus.$on('toggleCustomizer', payload => {
        this.customizer = payload
      })
      return this.customizer
    },
    // To set the default sidebar
    activeDefaultSidebar () {
      EventBus.$on('enableDefaultSidebar', payload => {
        this.defaultSidebar = payload
      })
      return this.defaultSidebar
    },
    rtlLayoutHandler () {
      EventBus.$on('rtlLayoutEvent', payload => {
        this.rtlLayout = payload
      })
      return this.rtlLayout
    }
  },
  notifications: {
    showSuccessMessage: { // You can have any name you want instead of 'showLoginError'
      title: 'Welcome To Vuely',
      message: 'A beautiful VueJs dashboard for every web developer.',
      type: 'success', // You also can use 'VueNotifications.types.error' instead of 'error'
      timeout: 2500
    }
  }
}
</script>
