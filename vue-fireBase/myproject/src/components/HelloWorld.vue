<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Navbar/>
    <AllFriend :friends="friends" @delete="deleteFriends" />
    <OnlineFriend :friends="friends" />
    <blog/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import AllFriend from '../components/AllFriend'
import OnlineFriend from '../components/OnlineFriend'
import blog from '../components/Blog'
export default {
  name: 'HelloWorld',
  components: {
    Navbar: Navbar,
    AllFriend,
    OnlineFriend,
    blog
  },
  data () {
    return {
      msg: 'My first vue app',
      friends: [
        { name: 'Mario', online: true },
        { name: 'Luigi', online: false },
        { name: 'Bowser', online: true },
        { name: 'Peach', online: false }
      ]
    }
  },
  methods: {
    deleteFriends (payload) {
      console.log(payload, ' testing the payload')
      this.friends = this.friends.filter(friends => {
        return friends.name !== payload.name
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  text-align: center;
}
</style>
