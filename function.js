var x=0

function menu(){
    if(x==0){
        x=1;
        txt="<div class='menu'><a class='boton' href='index.html'><p>INICIO</p></a><a class='boton' href=''><p>NOTICIAS</p></a><a class='boton' href='Contacto.html'><p>CONTACTO</p></a><a class='boton' href=''><p>AYUDA</p></a><a class='boton' href=''><p>TEST VOCACIONAL</p></a></div>" 
    }else{
        if(x==1){
            x=0;
            txt="" 
        }
    }

    document.getElementById("menu").innerHTML=txt;
    
}
