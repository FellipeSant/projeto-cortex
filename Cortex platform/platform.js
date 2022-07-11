function openMenu() {
    document.body.classList.add('menu-expanded')
}
function closeMenu(){
    document.body.classList.remove('menu-expanded')
}

function showBackToTopButtonOnScroll(){
    if(scrollY > 550){
        backToTopButton.classList.add('show')
    }
    else{
        backToTopButton.classList.remove('show')
    }
}

function activateMenuAtCurrentSection(section){
    // linha alvo
    const targetLine = scrollY + innerHeight / 2

    // Verificar se a seção passou da linha
    // quais dados vou precisar?

    // o topo da seção
    const sectionTop = section.offsetTop

    //a altura da seção
    const sectionHeight = section.offsetHeight

    // o topo da seção chegou ou ultrapassou a linha alvo
    const sectionTopReachOrPassedTargetline = targetLine
    >= sectionTop

    // informações dos dados e da lógica
        // console.log(
        //     'O topo da seção chegou ou passou da linha?',
        //     sectionTopReachOrPassedTargetline
        // )


    // Verifica se a base está abaixo da linha alvo
    // quais dados vou precisa?

    // a seção termina onde?
    const sectionEndAt = sectionTop + sectionHeight

    // o final da deção passou da linha alvo
    const sectionEndPassedTargerline = sectionEndAt <= targetLine

    // limites da seção
    const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargerline

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if(sectionBoundaries){
        menuElement.classList.add('active')
    }

}

showBackToTopButtonOnScroll()
openMenu()
closeMenu()