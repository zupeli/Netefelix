sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller,JSONModel) {
    "use strict";

    return Controller.extend("projnetefelix.controller.Inicio", {
        onInit: function () {
        // definição de lista vazia de resultados
            var resultados = {
            titles:[]
        }    

        // definição de modelo
        let resultadosModel = new JSONModel();

        // atribuição de dados
        resultadosModel.setData(resultados);

        // anexar modelo na tela
        let tela = this.getView();
        tela.setModel(resultadosModel, "APINetflixxx");

        },
        onInicioLinkPress: function(){
            alert("Navegar para tela inicial");

        },
        onBuscarDados: function(){
            // busca de dados na api da Netflix
            let searchField = this.byId("idSearchField")
            let filtro = searchField.getValue();

            // alert(filtro);

            const settings = {
                async: true,
                crossDomain: true,
                url: 'https://netflix54.p.rapidapi.com/search/?query=' +
                filtro + '&offset=0&limit_titles=50&limit_suggestions=20&lang=pt',
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '0ea29d7ae4msh0e7e0cd411a87cap10b9b1jsnb7a6804032a2',
                    'x-rapidapi-host': 'netflix54.p.rapidapi.com'
                }
            };
            
            $.ajax(settings).done(function (response) {
                console.log(response);

                // Nomenclaturas variaveis
                let sNome = 'Elvys Zupeli'; // string
                let aLista = []; // Array
                let oUser = {};

                // resgatar o modelo e atualizar os dados

                let tela = this.getView();
                let modelo = tela.getModel("APINetflixxx")
                let dados = modelo.getData();

                // limpar a lista
                dados.titles = [];
                dados.titles = response.titles;
                modelo.refresh();
            }.bind(this));

        }
    });
});
