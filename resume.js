function addnewwefeild(){
    let newnode=document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("wefeild");
    newnode.classList.add("mt-2");
    newnode.setAttribute("row",3);
    newnode.setAttribute("placeholder","Enter text");
    let weob=document.getElementById("we");
    let weaddbuttonob=document.getElementById("weaddbutton");
    weob.insertBefore(newnode,weaddbuttonob);
}
function addnewaqfeid(){
    let newnode=document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("aqfeild");
    newnode.classList.add("mt-2");
    newnode.setAttribute("row",3);
    newnode.setAttribute("placeholder","Enter text");
    let aqob=document.getElementById("aq");
    let aqaddbuttonob=document.getElementById("aqaddbutton");
    aqob.insertBefore(newnode,aqaddbuttonob);

}
// generate resume
function generateresume(){
    let namefeild=document.getElementById("namefeild").value;
    let namet1=document.getElementById("namet1");
    namet1.innerHTML=namefeild;

    document.getElementById("namet2").innerHTML=namefeild;
    document.getElementById("contactt").innerHTML= document.getElementById("contactfeild").value;
    document.getElementById("addresst").innerHTML= document.getElementById("addressfeild").value;
    document.getElementById("linkedint").innerHTML= document.getElementById("linkedinfeild").value;
    document.getElementById("githubt").innerHTML= document.getElementById("githubfeild").value;
    document.getElementById("objectivet").innerHTML= document.getElementById("objectivefeild").value;
    let wes=document.getElementsByClassName("wefeild");
    let str='';
    for(let e of wes){
        str=str+`<li>${e.value}</li>`;

    }
    document.getElementById("wet").innerHTML=str;

    let aqs=document.getElementsByClassName("aqfeild");
    let atr='';
    for(let a of aqs){
        atr=atr+`<li>${a.value}</li>`;

    }
    document.getElementById("aqt").innerHTML=atr;
    let file=document.getElementById("imgfeild").files[0];
    console.log(file);
    let reader=new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    reader.onloadend=function(){
        document.getElementById("imgt").src=reader.result;
    };



    document.getElementById("cv-form").style.display='none'
    document.getElementById("cv-template").style.display='block'




}
function printresume(){
    window.print();
}