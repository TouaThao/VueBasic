new Vue({
    el: '#app',
    data: {
        title: 'Vue Ninja',
        wage: 10,
        name: 'Toua',
        url: 'https://www.youtube.com/',
        classes: ['one', 'two'],
        coords:{
            x:0,
            y:0,
        }
    },
    methods: {
        updateName(event){
            this.name = event.target.value
        },
        greet(time) {
            return `Hello and good ${time}, ${this.name}`
        },
        changeWage(amount) {
            this.wage += amount
        },
        logEvent(event) {
            console.log(event)
        },
        logCoords(event){
            this.coords.x = event.offsetX
            this.coords.y = event.offsetY
        }
    }
})