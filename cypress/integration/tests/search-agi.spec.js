/// <reference types="cypress" />

import constants from '../../support/constants'
import blogAgi from '../../support/locators/search-agi'

describe('Acessar blog e realizar validações no campo de pesquisa.', () =>{
    beforeEach(() => {
       cy.visit('') 
    })
    it('Cenário 1 - Visualizar página e realizar uma pesquisa sem resultados com vários caracteres.', () => {
        cy.url().should('eq', 'https://blogdoagi.com.br/')
        constants.clicarQuandoClicavel(blogAgi.BTN_LUPA)
        constants.preencherCampoComTexto(blogAgi.TEXT_SEARCH, constants.LARGE_STRING)
        constants.clicarQuandoClicavel(blogAgi.BTN_SEARCH)
        constants.assertivaEspecifica(blogAgi.TEXT_RESULT_FALSE, 'have.text', 'Nenhum resultado')
    })

    it('Cenário 2 - Visualizar página e realizar uma pesquisa com resultados.', () => {
        cy.url().should('eq', 'https://blogdoagi.com.br/')
        constants.clicarQuandoClicavel(blogAgi.BTN_LUPA)
        constants.preencherCampoComTexto(blogAgi.TEXT_SEARCH, constants.SMALL_STRING_TRUE)
        constants.clicarQuandoClicavel(blogAgi.BTN_SEARCH)
        constants.assertivaEspecifica(blogAgi.TEXT_RESULT_TRUE, 'to.contain', constants.SMALL_STRING_TRUE)
    })

    it('Cenario 3 - Pesquisar a partir de uma pesquisa sem resultados e pressionando enter.', () => {
        cy.url().should('eq', 'https://blogdoagi.com.br/')
        constants.clicarQuandoClicavel(blogAgi.BTN_LUPA)
        constants.preencherCampoComTexto(blogAgi.TEXT_SEARCH, constants.SMALL_STRING_FALSE)
        constants.clicarQuandoClicavel(blogAgi.BTN_SEARCH)
        constants.assertivaEspecifica(blogAgi.TEXT_RESULT_FALSE, 'have.text', 'Nenhum resultado')
        constants.limparCampo(blogAgi.TEXT_SEARCH_RESULT)
        constants.preencherCampoComTextoEPressionarEnter(blogAgi.TEXT_SEARCH_RESULT, constants.SMALL_STRING_TRUE)
    })
})