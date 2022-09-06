const { createApp }  = Vue ;

let id = 0 ;
createApp({
    data(){
         return{
          newTodo : "" ,
          todos : [] ,
          
         } 
    },

    methods : {
        addTask(){
            if(this.newTodo.length  === 0 ){
                alert("Input value is null") ;
                return ;
            }
            this.todos.push({id : id++ , text : this.newTodo ,  checked : false }) ;
            this.newTodo = '';
            console.log("addTask is invoked")
        },

        toggle(key){
            let idx = this.todos.findIndex((obj) => obj.id === key ) ;
             this.todos[idx].checked = !this.todos[idx].checked 
             console.log("cmpltd is invoked") ;

             console.log(this.todos[idx].checked);
        },
        removeTask(key){

            this.todos = this.todos.filter((elem) => elem.id != key ) ;
            console.log("removeTask is  invoked!")
        },

        editTask(key){
            let rename = window.prompt("Input new Todo ") ;

            let idx = this.todos.findIndex((obj) => obj.id === key ) ;
             
             if(idx !== -1){

                this.todos[idx].text  = rename ;
             }
        }

    }
}).mount("#app")