

const constants = {
    //Constants para utilizar nos testes de forma geral, como credenciais, locators, etc.
    LARGE_STRING: 'AAAAAAAAABBBBBBBBBCCCCCCCCCCDDDDDDDDDDDEEEEEEEEEEEFFFFFFFFFFGGGGGGGGGGGHHHHHHHHHHIIIIIIIIJJJJJJJKKKKKKLLLLLLLMMMMMMMMNNNNNNNNOOOOOOOPPPPPPPPQQQQQQRRRRRRRSSSSSSSTTTTTTUUUUUUUUUVVVVVVVVVXXXXXXZZZZZZZZ1234567890!@#%$¨*&)(^:?}[º°]',
    SMALL_STRING_FALSE: 'abcd 1234 !@#$',
    SMALL_STRING_TRUE: 'TEST',


    //Métodos
    elementoNaoExiste (htmlElement) {
        cy.get(htmlElement).should('not.exist')
    },
    
    limparCampo (htmlElement) {
        cy.get(htmlElement).should('be.visible').clear()
    },   

    preencherCampoComTexto (htmlElement, text) {
        cy.get(htmlElement).should('be.visible').type(text)
    },
    
    preencherCampoComTextoEPressionarEnter (htmlElement, text) {
        cy.get(htmlElement, {delay: 3000}).should('be.visible').type(text + '{enter}')
    },
    
    clicarQuandoClicavel (htmlElement) {
        cy.get(htmlElement).should('be.visible').click()
    },

    assertivaEspecifica (htmlElement, assertion, textToValidate) {
        cy.get(htmlElement).should(assertion, textToValidate)
    },

}; export default constants