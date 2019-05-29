<template>
    <div class="blog">
        <h2>{{ blogTitle }}</h2>
        <button @click="changeTitle">Change Title</button>
    </div>
</template>

<script>
export default {
  name: 'Blogs',
  data () {
    return {
      blogTitle: 'Blog'
    }
  },
  methods: {
    changeTitle () {
      this.blogTitle = 'New Blog'
    }
  },
  beforeCreate () {
    console.log('beforeCreate hook')
  },
  created () {
    console.log(' created hook')
  },
  beforeUpdate () {
    console.log(' created hook')
  }
}
</script>

<style>

</style>
