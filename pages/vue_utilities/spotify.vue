<template>
  <div v-if="!isLoggedIn">
    <div class="spotify__login-form">
      <button @click="login">Log In</button>
    </div>
  </div>
  <div v-else-if="isLoggedInAndDataLoaded">
    <button @click="logout">Log Out</button>
    <div class="spotify__user-info">
      <img
        v-if="hasProfileImage"
        :src="spotifyMeData.images[0].url"
        width="150"
      />
      <h1 v-text="spotifyMeData.display_name" />
    </div>
    <h3>Your Top Songs</h3>
    <AgGrid class="ag-theme-alpine" :grid-options="gridOptions" />
  </div>
</template>
<script>
const tokenLocalStorageKey = "gingertronmk1_github_io_spotify_token";
const expiryLocalStorageKey = "gingertronmk1_github_io_spotify_expiry";
const baseUrl = "https://api.spotify.com/v1";
export default {
  name: "SpotifyPage",
  props: {},
  data({ $axios }) {
    return {
      /**
       * LOGGING IN THINGS
       */
      bearerToken: null,
      expiryTime: null,

      /**
       * DATA
       */
      spotifyMeData: null,

      /**
       * AG Grid stuff
       */
      gridOptions: {
        cacheBlockSize: 20,
        rowModelType: "infinite",
        datasource: {
          getRows: async (params) => {
            const myParams = {
              offset: params.startRow,
              limit: params.endRow - params.startRow,
              time_range: "long_term",
            };
            const { data } = await $axios({
              method: "GET",
              url: `${baseUrl}/me/top/tracks`,
              headers: {
                Authorization: `Bearer ${this.bearerToken}`,
              },
              params: myParams,
            });
            let lastRow = -1;
            if (data.items.length < 1) {
              lastRow = params.startRow;
            }
            const items = data.items.map(
              ({ name, artists, album, popularity }) => {
                return {
                  name,
                  artist: artists[0].name,
                  album: album.name,
                  popularity,
                };
              }
            );
            params.successCallback(items, lastRow);
          },
        },
        rowData: [],
        columnDefs: this.setColumnDefDefaults([
          { field: "name" },
          { field: "artist" },
          { field: "album" },
          { field: "popularity" },
        ]),
      },
    };
  },
  computed: {
    currentTime() {
      return new Date().getTime();
    },
    timeDifference() {
      return this.expiryTime - this.currentTime;
    },
    hasBearerToken() {
      const token = this.bearerToken;
      return token !== undefined && token !== null;
    },
    validExpiryTime() {
      return this.timeDifference > 0;
    },
    isLoggedIn() {
      return this.hasBearerToken && this.validExpiryTime;
    },
    isLoggedInAndDataLoaded() {
      return this.isLoggedIn && !!this.spotifyMeData;
    },
    hasProfileImage() {
      return this.spotifyMeData?.images?.length;
    },
  },
  mounted() {
    if (window.location.hash) {
      // LOGGING IN
      const hash = window.location.hash;
      const bearerToken = hash.split("access_token=")[1].split("&")[0];
      const expiryTime = parseInt(hash.split("expires_in=")[1].split("&")[0]);
      const time = new Date().getTime() + expiryTime * 1000;
      window.localStorage.setItem(tokenLocalStorageKey, bearerToken);
      window.localStorage.setItem(expiryLocalStorageKey, time);
      history.replaceState(null, null, this.$route.path);
    }
    this.bearerToken = window.localStorage.getItem(tokenLocalStorageKey);
    this.expiryTime = window.localStorage.getItem(expiryLocalStorageKey);
    console.log(this.bearerToken, this.expiryTime, this.timeDifference);
    if (this.isLoggedIn) {
      this.$axios({
        method: "GET",
        url: `${baseUrl}/me`,
        headers: {
          Authorization: `Bearer ${this.bearerToken}`,
        },
      }).then(({ data }) => {
        this.spotifyMeData = data;
      });
    }
  },
  methods: {
    login() {
      const getUrl = window.location;
      const baseUrl = `${getUrl.protocol}//${getUrl.host}`;
      const scopes = [
        "user-read-playback-position",
        "user-top-read",
        "user-read-recently-played",
      ];

      window.location.href =
        `https://accounts.spotify.com/authorize?` +
        [
          `client_id=${process.env.SPOTIFY_CLIENT_ID}`,
          `response_type=token`,
          `redirect_uri=${baseUrl}${this.$route.path}`,
          `scope=${scopes.join(" ")}`,
        ].join("&");
    },
    logout() {
      this.bearerToken = null;
      this.expiryTime = null;
      localStorage.removeItem(tokenLocalStorageKey);
      localStorage.removeItem(expiryLocalStorageKey);
    },
    setColumnDefDefaults(defs) {
      return defs.map((def) => {
        return {
          ...def,
          resizable: true,
        };
      });
    },
  },
};
</script>

<style lang="scss">
.ag-theme-alpine {
  min-height: 1px;
  flex: 1;
}

.body__inner {
  flex: 1000;
}

.spotify {
  &__user-info {
    @include flex(row, space-between, center);
  }
}
</style>
