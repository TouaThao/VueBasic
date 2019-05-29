<template>
  <div id="onlinefriend">
    <h2>Online friend</h2>
        <div v-for= "(friend, index) in friends" :key="index">
        <span v-if="friend.online"> {{ friend.name }} </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'onlineFriends',
  props: ['friends'],
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
