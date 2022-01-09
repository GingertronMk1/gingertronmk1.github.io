<template>
  <div v-if="isLoggedIn">
    <button @click="logout">Log Out</button>
    <img
      v-if="hasProfileImage"
      :src="spotifyMeData.data.images[0].url"
      width="150"
    />
    <button @click="getTopValues">Get Top Values</button>
    <AgGrid
      v-if="myTopTracks.length"
      class="ag-theme-alpine"
      :column-defs="columnDefs"
      :row-data="myTopTracks"
    />
  </div>
  <div v-else>
    <div class="spotify__login-form">
      <button @click="loginToSpotify">Log In</button>
    </div>
  </div>
</template>
<script>
const tokenLocalStorageKey = "gingertronmk1_github_io_spotify_token";
const expiryLocalStorageKey = "gingertronmk1_github_io_spotify_expiry";
export default {
  name: "SpotifyPage",
  props: {},
  async asyncData({ $axios, $config }) {
    const bearerToken = localStorage.getItem(tokenLocalStorageKey);
    let spotifyMeData = {};
    if (bearerToken) {
      spotifyMeData = await $axios({
        method: "GET",
        url: "https://api.spotify.com/v1/me",
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }).catch((error) => {
        console.log(error);
        localStorage.removeItem(tokenLocalStorageKey);
        return null;
      });
    }
    return {
      bearerToken,
      spotifyMeData,
      myTopTracks: [],
      columnDefs: [
        { field: "name" },
        { field: "artistName" },
        { field: "albumName" },
        { field: "popularity" },
      ],
    };
  },
  computed: {
    isLoggedIn() {
      const bearerToken = localStorage.getItem(tokenLocalStorageKey);
      const expiryTime = parseInt(localStorage.getItem(expiryLocalStorageKey));
      return (
        bearerToken !== undefined &&
        expiryTime !== null &&
        new Date().getTime() / 1000 < expiryTime
      );
    },
    hasProfileImage() {
      return this.spotifyMeData?.data?.images?.length;
    },
  },
  mounted() {
    window.processenv = process.env;
    if (window.location.hash) {
      console.log(window.location.hash);
      window.localStorage.setItem(
        tokenLocalStorageKey,
        window.location.hash.substring(1).slice("access_token=".length)
      );
      const time =
        new Date().getTime() / 1000 +
        parseInt(window.location.hash.substring(4).slice("expires_in=").length);
      window.localStorage.setItem(expiryLocalStorageKey, time);
      this.$router.push({ name: this.$route.name });
    }
  },
  methods: {
    async getSpotify(url, method = "GET", data = null) {
      url = url.indexOf("/") !== 0 ? `/${url}` : url;
      return await this.$axios({
        url: `https://api.spotify.com/v1${url}`,
        method,
        data,
        headers: {
          Authorization: `Bearer ${this.bearerToken}`,
        },
      });
    },
    loginToSpotify() {
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
    getTopValues() {
      return this.getSpotify("me/top/tracks").then(({ data }) => {
        console.table(data?.items);
        this.myTopTracks = data.items.map((track) => {
          track.artistName = track?.artists[0]?.name;
          track.albumName = track?.album?.name;
          return track;
        });
      });
    },
    logout() {
      console.log("Logout");
      localStorage.removeItem(tokenLocalStorageKey);
      this.$nuxt.refresh();
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
</style>
