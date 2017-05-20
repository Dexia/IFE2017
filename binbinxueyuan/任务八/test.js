var btntraversal = document.getElementById("traversal");
var btnsearch = document.getElementById("search");
var root = document.getElementById("root");
var btnsearchtext = document.getElementById("searchtext");
var timer = 0;

function showNode(node){
    node.style.background = "#ffffff";
    setTimeout(function(){
        node.style.background = "#ff524a";
    },timer+=500);
    setTimeout(function(){
        node.style.background = "#ffffff";
    },timer+=500);
}

//遍历事件
function traversal(root){
    if(root){
        showNode(root);
        traversal(root.children[0]);
        traversal(root.children[1]);
        traversal(root.children[2]);       
    }
}

btntraversal.addEventListener("click",function(){
    traversal(root);
    timer = 0;
},false);


//文本寻找事件
function search(){

}

btnsearch.addEventListener("click",function(){

},false);