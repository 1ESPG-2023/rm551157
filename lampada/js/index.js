function liga(){
    const imgLampada = document.querySelector("img");
    const botao = document.querySelector("button");

    if (botao.textContent == "LIGAR"){
        imgLampada.src = "../img/pic_bulbon.gif"
        botao.textContent = "Desligar"
    }else{
        imgLampada.src = "../img/pic_bulboff.gif"
        botao.textContent = "Ligar"
    }
}