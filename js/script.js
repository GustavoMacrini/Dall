let currentItem = 1;
function mudarProduto(type, direction){

    var largura = window.screen.width;
    console.log(largura);
    
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
    
    // let controls = document.querySelectorAll(controlType);
    let items = document.querySelectorAll(classType);
    let maxitems = items.length;    

    if(direction == 'left'){
        currentItem -=1;
    }else{
        currentItem +=1;
    }

    if(currentItem >= maxitems-1){
        currentItem = 1;
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


// Navbar
navbarChangeItemColor();

function navbarExpanded(option){
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

function navbarChangeItemColor(){
    let selecionado = 'rgba(160, 16, 26, 1)';
    let item;
    
    // Home selecionada por padrão 
    if(typeof sessionStorage.currentPage == 'undefined'){
        sessionStorage.currentPage = 'home';
    }
    
    item = document.getElementById('navbar-' + sessionStorage.currentPage);
    item.style.color = selecionado;
}


function produtosDetalhesShow(card){
    // document.getElementById('group-card-maquina').classList.toggle('group-hidden');
    document.querySelector('#group-card-' + card).classList.toggle('group-hidden');
}