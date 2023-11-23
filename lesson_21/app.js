const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name:'',
      confirmedName:''
    };
  },
  methods:{
    confirmInput(){
      this.confirmedName = this.name;
    },
    submitForm(event){
      alert('Submitted!');
    },
    setName(event){
      this.name = event.target.value;
    },
    add(num){
      this.counter = this.counter + num;
    },
    reduce(num){
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');
