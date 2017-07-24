function List(){
    this.listSize=0;
    this.pos=0;
    this.dataStore=[];
    this.clear=clear;
    this.find=find;
    this.toString=toString;
    this.insert=insert;
    this.append=append;
    this.remove=remove;
    this.front=front;
    this.end=end;
    this.prev=prev;
    this.next=next;
    this.hasPrev;
    this.hasNext;
    this.length=length;
    this.currPos=currPos;
    this.moveTo=moveTo;
    this.getElement=getElement;
    this.contains=contains;
}
function append(element){
    this.dataStore[this.listSize++]=element;
}
function find(element){
    for(var i=0;i<this.dataStore.length;i++){
        if(this.dataStore[i]==element){
            return i; //遇见return就停止执行
        }
        return -1;//否则返回-1
    }

}
function remove(element){
    var findAt=this.find(element);
    if(findAt>-1){
        this.dataStore.splice(findAt,1);
        --this.listSize;
        return true;
    }
    return false;
}
function toString(){
    return this.dataStore;
}
function clear(){
    delete this.dataStore;
    this.dataStore.length=0;
    this.listSize=this.pos=0;
}
function length(){
    return this.length;
}

var names=new List();
names.append("fjdj");
names.append("fjdj");
names.append("fjdj");
names.append("fjdj");
console.log(names.toString());

