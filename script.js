let currentItem = 0;
function mudarProduto(type, direction){
    let controlType;
    let classType;

    switch(type){
        case 'empacota-slide':
            controlType =".control-empacota-slide";
            classType = ".empacota-slide";
        break;
        case 'embalagem-slide':
            controlType = ".control-embalagem-slide";
            classType = ".embalagem-slide";
        break;
        default:
            console.log('parametro(s) errado(s)');
    };

    let controls = document.querySelectorAll(controlType);;
    let items = document.querySelectorAll(classType);
    let maxitems = items.length;    

    if(direction == 'left'){
        currentItem -=1;
    }else{
        currentItem +=1;
    }

    if(currentItem >= maxitems){
        currentItem = 0;
    }
    
    if(currentItem < 0){
        currentItem = maxitems - 1;
    }
            
    items.forEach(item => item.classList.remove("current-item"));
    
    items[currentItem].scrollIntoView({
        inline: "center",
        behavior: "smooth",
        block: "nearest"
    });
    
    items[currentItem].classList.add("current-item"); 
};