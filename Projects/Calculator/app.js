var btns=document.querySelectorAll("button");
var input=document.querySelector("input");

btns.forEach(btn =>{
        btn.addEventListener('click',function () {
            if(btn.innerText==="="){
                var ans=eval(input.value);
                input.value=ans;
            }
            else if(btn.innerText==="C")
            {
                input.value="";
            }
            else
            input.value += btn.innerText;    
        })
});
document.addEventListener('keypress',(e)=>
{
    if(e.key == "Enter")
    {
        var ans=eval(input.value);
                input.value=ans;
    }
})

