const lists=['Act of violence','Categorus','sportusdictys','Biblicalnames','Dedstitusde','Boat']
var texts=document.getElementById('texts');

var slt=''

document.body.innerHTML+=`<div style="color:white;display:none;padding:12px;cursor:pointer;" id="tooltip" onclick="addhighlight()">add highlight</div>`

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
                tooltip.style.top=rect.top-40+'px';
            }
            else{
                tooltip.style.top=rect.top+40+'px';
            }
            
            tooltip.style.left=rect.x+5+'px';
            tooltip.style.position='absolute';
            tooltip.style.background='black';
            console.log(rect)

        //     var contents=rangeobject.extractContents()
        // var node=document.createElement('div');
        // node.className='highlight'
        // node.appendChild(contents)  
        // rangeobject.insertNode(node)
        // var childnode=document.createElement('div');
        // childnode.className='tag';
        // childnode.innerHTML='"'
        // node.append(childnode)

        }

    else{
        tooltip.style.display='none';
    }

    }

}

function addhighlight(){
    event.preventDefault()
    console.log(slt)
       var contents=slt.extractContents()
        var node=document.createElement('div');
        node.className='highlight'
        node.appendChild(contents)  
        slt.insertNode(node)
        var childnode=document.createElement('div');
        childnode.className='tag';
        childnode.innerHTML='"'
        node.append(childnode)
        tooltip.style.display='none';

}
function shows(){
    var range=selection.getRangeAt(0);
    create(range);

    console.log(selecttext)
}


function create(range){
    var node=document.createElement('div');
    // var childnode=document.createElement('div');
    // childnode.className='tag'
    node.className='highlight'
    // texts.append(node)
    // node.innerHTML='me'
    // node.append(childnode)
    // childnode.innerHTML='%'
    node.appendChild(range)
    range.surroundContents(node)
    
}
