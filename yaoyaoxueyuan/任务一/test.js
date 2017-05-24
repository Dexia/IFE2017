window.onload=function(){
    var btn = document.getElementById("btn");
    var oText = document.getElementById("oText");
    var pText = document.getElementById("pText");

    btn.onclick = function(){
        var val = oText.value;
        console.log(val);
        //将所有得中文符号和中文替换为英文符号，方便计算长度
        //1.先替换空格，再替换中文
        val = val.replace(/^\s+|\s$/g,"").replace(/[\u0391-\uFFE5]/g,"*");
        if(val.length<4||val.length>16){
            Ptext.innerHTML = "长度为4-16个字符";
            pText.style.color = "red";
            prompt(pText,1);
            oText.style.border="2px solid red";
        } else{
            pText.innerHTML = "格式正确";
            pText.style.color = "green";
            prompt(pText,2);
            oText.style.border="2px solid green";
        }
    };
var prompt=function(obj,situation){
    if(situation==1){
            Ptext.innerHTML = "长度为4-16个字符";
            pText.style.color = "red";
    }else if(situation==2) {
            pText.innerHTML = "格式正确";
            pText.style.color = "green";
    }
};

oText.onfocus=function(){
    pText.innerHTML = "";
    oText.style.border = "1px solid gray";
}


}