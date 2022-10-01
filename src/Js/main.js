

setInterval(function test() 
{
    
    for(var i = 0; i<10; i++)
    {

        var div = document.createElement("div")
        div.setAttribute("class","One")
        div.classList.add("test"+[i])
    
        document.body.appendChild(div)
    
        var img = document.createElement("img")
        img.setAttribute("src","Images/snowflake.png")
    
        div.appendChild(img)


        
    }
}, 2000)


