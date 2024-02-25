var form = document.querySelector(".fale-conosco")

var mascara = document.querySelector(".mascara-formulario")






function voceclicounobotao() {

    form.style.left = "40%"
    form.style.transform = "translateX (-40%)"
    mascara.style.visibility = "visible"

}

function esconderform(){
    form.style.left = "-300px"
    form.style.transform = "translateX (0)"
    mascara.style.visibility = "hidden"


}