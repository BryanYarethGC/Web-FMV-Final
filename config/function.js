var x=0

function menu(){
    if(x==0){
        x=1;
        txt="<div class='menu'><a class='boton' href='index.html'><p>INICIO</p></a><div class='menu2'><a class='boton3' href='aspirantes.html'><p>ASPIRANTES</p></a><a class='boton3' href='Alumnos.html'><p>ALUMNOS</p></a><a class='boton3' href='Nosotros.html'><p>NOSOTROS</p></a></div><a class='boton' href='Noticias.html'><p>NOTICIAS</p></a><a class='boton' href='Contacto.html'><p>CONTACTO</p></a><a class='boton' href='Ayuda.html'><p>AYUDA</p></a><a class='boton' href='Test_Vocacional.html'><p>TEST VOCACIONAL</p></a></div>" 
    }else{
        if(x==1){
            x=0;
            txt="" 
        }
    }

    document.getElementById("menu").innerHTML=txt;
    
}

var vsid = "si2547512da9fc5";
(function() { 
var vsjs = document.createElement('script'); vsjs.type = 'text/javascript'; vsjs.async = true; vsjs.setAttribute('defer', 'defer');
    vsjs.src = 'https://www.virtualspirits.com/vsa/chat.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(vsjs, s);
})();
