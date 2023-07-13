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


function navbarExpanded(option){
    let selecionado = 'rgba(160, 16, 26, 1)';
    let deselecionado = 'rgba(0, 0, 0, 1)';
    let listaItens = ['home', 'nossosProdutos', 'sobreNos', 'contato', 'politicaPrivacidade']
    let item;

    // Home padrão selecionada
    if(typeof sessionStorage.currentPage == 'undefined'){
        sessionStorage.currentPage = 'home';
    }
    
    // Mudar a cor dos itens do menu
    listaItens.forEach(element => {
        item = document.getElementById('navbar-' + element);
        if(element != sessionStorage.currentPage){            
            item.style.color = deselecionado;
        }else{
            item.style.color = selecionado;
        }
    });

    // Altera icones do menu
    if(option == 'open'){
        document.getElementById('navbar-menu').style.visibility = 'hidden';
        document.getElementById('navbar-close-menu').style.visibility = 'visible';
    }
    if(option == 'close'){
        document.getElementById('navbar-close-menu').style.visibility = 'hidden';
        document.getElementById('navbar-menu').style.visibility = 'visible';
    }
}

function navbarItemSelected(item){
    sessionStorage.currentPage = item;
}