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
    alert('beforeCreate hook')
  },
  created () {
    alert(' created hook')
  },
  beforeUpdate () {
    alert(' created hook')
  }
}
</script>

<style>

</style>
