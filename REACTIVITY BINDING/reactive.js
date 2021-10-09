var app=Vue.createApp({
data(){
  return{
    tomuch:'Too much',
    notmuch:'Not there yet',  
    counter:0,
  }
},
watch:{
 
  counter(value){
    if(value===37){
      this.counter=this.value;
    }
    if(value < 36){
     this.counter=
     this.counter=this.value;
   }
   else if(value > 38){
    this.counter='Too much';
    }
  }
},
methods:{
  
 },
computed:{
  add(num){
    this.counter=this.counter+num;
     },
}
});
app.mount('.header');
 