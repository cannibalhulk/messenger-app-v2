function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}



class Message {
    constructor(_name, _text){
        this.name=_name;
        this.text = _text;
        this.time=gettime();
    }

    gettime() {
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`
    }

    toHtml() {
        return  `<p>${this.time}  ${this.name}:  ${this.text} </ p>`
    }

    toString(){
        console.log(`${this.time} ${this.author}: ${this.text}`)
    }

}

class Messenger{
    constructor(){
        this.history=[]
    }

    send(name,text){
        this.history.push(new Message(name,text,gettime()));
    }

    show_history(){
        let rightSec = document.querySelector('.right-sect');
        this.history.forEach(el=> rightSec.innerHTML+=el.toHtml())
    }
    
}


let btn = document.querySelector('button');

btn.addEventListener('click',function(){
    let sender =document.querySelector('input');
    let message= document.querySelector('textarea');
    let  messenger = new Messenger();
    messenger.send(sender.value, message.value);
    console.log(messenger.history);
    let h=document.querySelector('p');
    messenger.show_history();
    sender.value='';
    message.value='';
})