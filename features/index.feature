# language: pt

Funcionalidade: Index Login

    Cenario: Inicial
        Dado que desejo entrar na tela inicial
        Quando abrir a pagina no browser
        Entao devera apresentar a pagina inicial

    Cenario: Username
        Dado que desejo entrar na tela inicial
        Quando abrir a pagina no browser
        Entao devera aparecer o campo 'username'

    Cenario: Login
        Dado que desejo entrar na tela inicial
        Quando abrir a pagina no browser
        E digitar 'lucas@teste.com' no campo 'username'
        E digitar 'senha@123' no campo 'password'
        Entao deverar aparecer a mensagem 'usuario logado'