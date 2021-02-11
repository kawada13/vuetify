<template>
<div>
<v-app>
  <v-container>
  <v-btn
    depressed
    color="primary"
    @click="goToHome"
    class="mr-2"
  >
    Homeへ行く
  </v-btn>
  <v-btn
    depressed
    color="primary"
    @click="goToAbout"
  >
    Aboutへ行く
  </v-btn>
  <router-view />
  </v-container>
</v-app>

</div>
</template>


<script>

export default {
  data() {
    return {
      drawer: null,
      supports:[
          {
            name: 'Consulting and suppourt',
            icon: 'mdi-vuetify',
            link:'/consulting-and-support'
          },
          {
            name: 'Discord community',
            icon: 'mdi-discord',
            link:'/discord-community'},
          {
            name: 'Report a bug',
            icon: 'mdi-bug',
            link:'/report-a-bug'
          },
          {
            name: 'Github issue board',
            icon: 'mdi-github-face',
            link:'/guthub-issue-board'
          },
          {
            name: 'Stack overview',
            icon: 'mdi-stack-overflow',
            link:'/stack-overview'
          },
        ],
      nav_lists:[
        {
          name: 'Getting Started',
          icon: 'mdi-speedometer',
          lists:['Quick Start','Pre-made layouts']
        },
        {
          name: 'Customization',
          icon: 'mdi-cogs'
        },
        {
          name: 'Styles & animations',
          icon: 'mdi-palette',
          lists:['Colors','Content','Display']
        },
        {
          name: 'UI Components',
          icon: 'mdi-view-dashboard',
          lists:['API explorer','Alerts']
        },
        {
          name: 'Directives',
          icon: 'mdi-function'
        },
        {
          name: 'Preminum themes',
          icon: 'mdi-vuetify'
        },
      ]
    }
  },
  methods: {
    goToAbout() {
      this.$router.push('/about')
    },
    goToHome() {
      this.$router.push('/')
    },
  }

};
</script>
