function arrayData() {
    catalogo= [
        {
        placa: "CCN198",
        marca: "Audi",
        color: "Gris",
        modelo: "Q7",
        agno: "2020",
        multas : ['03/05/2020','12/12/2021','12/5/2022','5/2/2023' ],
        propepietarios: {
            nombre: 'Erick',
            documento: '1095789395',
            ciudad: 'Bucaramanga'
        },
        kilometraje: '800000'
        
    },
    
   {
        placa: "CCN198",
        marca: "Toyota",
        color: "Gris",
        modelo: "Q7",
        agno: "2020",
        multas : ['03/05/2020','12/12/2021','12/5/2022','5/2/2023' ],
        propepietarios: {
            nombre: 'Erick',
            documento: '1095789395',
            ciudad: 'Bucaramanga'
        },
        kilometraje: '800000'
        
    },
    
    {
        placa: "CCN198",
        marca: "Mercedes",
        color: "Gris",
        modelo: "Q7",
        agno: "2020",
        multas : ['03/05/2020','12/12/2021','12/5/2022','5/2/2023' ],
        propepietarios:[
            {  
            nombre: 'Erick',
            documento: '1095789395',
            ciudad: 'Bucaramanga'
        },{   
            nombre: 'Steven ',
            documento: '10953479395',
            ciudad: 'Cuba'
        }
    
        ],
        kilometraje: '800000'
        
    }]
    return catalogo
}


//Exportar Modulos

module.exports = {
    "arrayData" : arrayData
}