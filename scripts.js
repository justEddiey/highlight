
var texts=document.getElementById('texts');

var slt=''

document.body.innerHTML+=`<div style="color:white;display:none;padding:12px;cursor:pointer,borderRadius:10px"; id="tooltip" onclick="addhighlight()">add highlight</div>`

var tooltip=document.getElementById('tooltip');
function getRangeObject(object){
    try{
        if(object.getRangeAt){
            return object.getRangeAt(0)
        }
    }
    catch(ex){
        console.log(ex)
    }
}
document.onmouseup=function(e){
    if(window.getSelection()){
        var selection=window.getSelection();
        var selecttext=selection.toString();
        var rangeobject=getRangeObject(selection);
        var rect=rangeobject.getBoundingClientRect();
        
        if(selecttext.length>0){
            slt=rangeobject
            tooltip.style.display='block';
            tooltip.innerHTML='addhighlight';
            if(rect.y>30){
                tooltip.style.top=e.clientY+window.scrollY-40+'px';
            }
            else{
                tooltip.style.top=rect.top+40+'px';
            }
            
            tooltip.style.left=e.clientX+5+'px';
            tooltip.style.position='absolute';
            tooltip.style.background='black';

        }

    else{
        tooltip.style.display='none';
    }

    }
   

}

function addhighlight(){
    event.preventDefault()
    
    //    var contents=slt.extractContents()
        var node=document.createElement('span');
        node.className='highlight'
        node.addEventListener("click",means)
        // node.appendChild(contents) 
        // slt.insertNode(node)
        // var childnode=document.createElement('div');
        // childnode.className='tag';
        // childnode.innerHTML='"'
        // node.append(childnode)
        slt.surroundContents(node);
        tooltip.style.display='none';

}
function means(){
    // console.log(event.target)
    var innertext=event.target.innerHTML
    var range = document.createRange()
    var anchorTag = event.target;
    range.selectNodeContents(event.target)
    anchorTag.insertAdjacentHTML('afterend', innertext);
    // range.extractContents()
    event.target.remove()
    // var afterHtml = anchorTag.innerHTML.substr(range.startOffset);
  
      
}
function shows(){
    var range=selection.getRangeAt(0);
    create(range);

    console.log(selecttext)
}


function create(range){
    var node=document.createElement('div');

    node.className='highlight'
    
    node.appendChild(range)
    range.surroundContents(node)
    
}
