var express = require("express");
var pruebasRouter = express.Router();
var mdAutenticacion = require('../../middlewares/autotenticacion');
pruebasRouter.route("/estadosAtencion")
    .get(mdAutenticacion.verificaToken,async function(req,res){
        res.header("Content-Type", "application/json; charset=utf-8"); 
        let json=[
            {
                descripcion:'EN ESPERA',
                desCorta:'EE'
            },
            {
                descripcion:'RESERVADO',
                desCorta:'R'
            },
            {
                descripcion:'EN ATENCION',
                desCorta:'EA'
            },
            {
                descripcion:'ATENDIDO',
                desCorta:'A'
            }
        ]
        
        res.json(json);
    });
    pruebasRouter.route("/listadoAtenciones")
    .get(async function(req,res){
        res.header("Content-Type", "application/json; charset=utf-8"); 
        let json=[
            {
              "pacienteid": 1,
              "nombres": "Ana María",
              "apePaterno": "González",
              "apeMaterno": "Vásquez",
              "nacFecha": "1985-07-20",
              "tipoDocumento": "DNI",
              "nroDocumento": "87654321",
              "codAtencion": "AT-202310-101",
              "fechaCita": "2023-10-20",
              "horaLlegada": "09:15",
              "tipoAtencion": "Presencial",
              "estadoAtencion": "A"
            },
            {
              "pacienteid": 2,
              "nombres": "Carlos Andrés",
              "apePaterno": "Mendoza",
              "apeMaterno": "Torres",
              "nacFecha": "1992-03-12",
              "tipoDocumento": "CE",
              "nroDocumento": "001234567",
              "codAtencion": "AT-202311-205",
              "fechaCita": "2023-11-05",
              "horaLlegada": "14:30",
              "tipoAtencion": "Virtual",
              "estadoAtencion": "EA"
            },
            {
              "pacienteid": 3,
              "nombres": "Lucía Fernanda",
              "apePaterno": "Quispe",
              "apeMaterno": "Huamán",
              "nacFecha": "2001-11-05",
              "tipoDocumento": "Pasaporte",
              "nroDocumento": "PE123456",
              "codAtencion": "AT-202312-042",
              "fechaCita": "2023-12-10",
              "horaLlegada": "11:00",
              "tipoAtencion": "Procedimiento",
              "estadoAtencion": "R"
            },
            {
              "pacienteid": 4,
              "nombres": "Pedro Luis",
              "apePaterno": "Díaz",
              "apeMaterno": "Romero",
              "nacFecha": "1978-09-18",
              "tipoDocumento": "DNI",
              "nroDocumento": "12345678",
              "codAtencion": "AT-202401-089",
              "fechaCita": "2024-01-15",
              "horaLlegada": "16:45",
              "tipoAtencion": "Presencial",
              "estadoAtencion": "EE"
            },
            {
              "pacienteid": 5,
              "nombres": "Sofía Alejandra",
              "apePaterno": "Castillo",
              "apeMaterno": "Morales",
              "nacFecha": "1999-12-30",
              "tipoDocumento": "CE",
              "nroDocumento": "002345678",
              "codAtencion": "AT-202402-150",
              "fechaCita": "2024-02-20",
              "horaLlegada": "10:20",
              "tipoAtencion": "Virtual",
              "estadoAtencion": "A"
            },
            {
                "pacienteid": 6,
                "nombres": "María Fernanda",
                "apePaterno": "López",
                "apeMaterno": "García",
                "nacFecha": "1988-04-15",
                "tipoDocumento": "DNI",
                "nroDocumento": "48563217",
                "codAtencion": "AT-202302-001",
                "fechaCita": "2024-02-20",
                "horaLlegada": "10:20",
                "tipoAtencion": "Virtual",
                "estadoAtencion": "A"
              }
          ]
        
        res.json(json);
    });
    pruebasRouter.route("/datoPacientexAtencion")
    .get(async function(req,res){
        res.header("Content-Type", "application/json; charset=utf-8");
        var data = req.query
        let json=[]
        if(data.nroDocumento=='48563217'){
            json={
                "pacienteid": 1,
                "nombres": "María Fernanda",
                "apePaterno": "López",
                "apeMaterno": "García",
                "nacFecha": "1988-04-15",
                "tipoDocumento": "DNI",
                "nroDocumento": "48563217",
                "sexo": "F",
                "codAtencion": "AT-202302-001",
                "numHistoria": "HCL-753912",
                "grupoSanguineo": "A+",
                "Aseguradora": "Pacífico Seguros",
                "producto": "Plan Platinum Salud",
                "telefono": "+51 987 654 321",
                "direccion": "Av. Javier Prado 1234, Lima 15021",
                "correo": "maria.lopez@example.com"
              }
        }
        
        
        res.json(json);
    });
    pruebasRouter.route("/perfil")
    .get(async function(req,res){
        res.header("Content-Type", "application/json; charset=utf-8"); 
        var data = req.query
        let json=[]
        if(data.perfil=='admin'){
            json={
                idPerfil:'1',
                grupoPerfil:'admin',
                subgrupos:[
                    {   
                        id:1,
                        nombre:'Ambulatorio',
                        ruta:'/Container/amulatorio'
                    },
                    {   
                        id:2,
                        nombre:'Hospital',
                        ruta:'/Container/Hospital'
                    },
                    {   
                        id:3,
                        nombre:'Emergencia',
                        ruta:'/Container/Emergencia'
                    },
                    {   
                        id:4,
                        nombre:'Inicio',
                        ruta:'/Container/Inicio'
                    },
                    {   
                        id:5,
                        nombre:'Mi agenda',
                        ruta:'/Container/agenda'
                    },
                    {   
                        id:6,
                        nombre:'Data Historica',
                        ruta:'/Container/dataHistorica'
                    },
    
                ]
            }
        }
        
        
        res.json(json);
    });
    pruebasRouter.route("/opcionesXAtencion")
    .get(async function(req,res){
        res.header("Content-Type", "application/json; charset=utf-8"); 
        var data = req.query
        let json=[]
        if(data.tipoAtencion=='Ambulatorio'){
            json={
                idOpcion:'1',
                grupoOpcion:'Ambulatorio',
                subgrupos:[
                    {   
                        id:1,
                        nombre:'Anamnesis y examen fisico',
    
                    },
                    {   
                        id:2,
                        nombre:'Diagnostico',
                    },
                    {   
                        id:3,
                        nombre:'Tratamiento', 
                    },
                    {   
                        id:4,
                        nombre:'Laboratorio',
    
                    },
                    {   
                        id:5,
                        nombre:'Resultados',
                    }
                    
    
                ]
            }
        }
        
        
        res.json(json);
    });
    pruebasRouter.route("/cie")
    .get(async function(req,res){
        res.header("Content-Type", "application/json; charset=utf-8"); 
        let json=
            [
                {
                  "codigo": "A00",
                  "descripcion": "Cólera",
                  "capitulo": "I - Ciertas enfermedades infecciosas y parasitarias",
                  "categoria": "Enfermedades infecciosas intestinales"
                },
                {
                  "codigo": "B20",
                  "descripcion": "Enfermedad por VIH con manifestaciones infecciosas y parasitarias",
                  "capitulo": "I - Ciertas enfermedades infecciosas y parasitarias",
                  "categoria": "Infecciones de transmisión predominantemente sexual"
                },
                {
                  "codigo": "E11",
                  "descripcion": "Diabetes mellitus tipo 2",
                  "capitulo": "IV - Enfermedades endocrinas, nutricionales y metabólicas",
                  "categoria": "Diabetes mellitus"
                },
                {
                  "codigo": "F32.0",
                  "descripcion": "Episodio depresivo leve",
                  "capitulo": "V - Trastornos mentales y del comportamiento",
                  "categoria": "Trastornos del humor [afectivos]"
                },
                {
                  "codigo": "I10",
                  "descripcion": "Hipertensión esencial (primaria)",
                  "capitulo": "IX - Enfermedades del sistema circulatorio",
                  "categoria": "Enfermedades hipertensivas"
                },
                {
                  "codigo": "J45",
                  "descripcion": "Asma",
                  "capitulo": "X - Enfermedades del sistema respiratorio",
                  "categoria": "Enfermedades crónicas de las vías respiratorias inferiores"
                },
                {
                  "codigo": "M54.9",
                  "descripcion": "Dorsalgia, no especificada",
                  "capitulo": "XIII - Enfermedades del sistema osteomuscular y del tejido conjuntivo",
                  "categoria": "Trastornos dorsales"
                },
                {
                  "codigo": "N39.0",
                  "descripcion": "Infección de vías urinarias, sitio no especificado",
                  "capitulo": "XIV - Enfermedades del sistema genitourinario",
                  "categoria": "Trastornos de las vías urinarias"
                },
                {
                  "codigo": "O80",
                  "descripcion": "Parto único espontáneo",
                  "capitulo": "XV - Embarazo, parto y puerperio",
                  "categoria": "Parto"
                },
                {
                  "codigo": "S72.0",
                  "descripcion": "Fractura del cuello del fémur",
                  "capitulo": "XIX - Traumatismos, envenenamientos y algunas otras consecuencias de causas externas",
                  "categoria": "Fracturas de la extremidad inferior"
                }
              ]
            
        
        res.json(json);
    });
    pruebasRouter.route("/alergiasxDni")
    .get(async function(req,res){
        res.header("Content-Type", "application/json; charset=utf-8"); 
        var data = req.query
        let json=[]
        if(data.nroDocumento=='48563217'){
            json={
                declaratoria:true,
                principios:[
                    {
                        "id": 2,
                        "descripcion": "Loratadina - Antihistamínico no sedante para alergias estacionales"
                      },
                      {
                        "id": 4,
                        "descripcion": "Fexofenadina - Antihistamínico para alergias respiratorias sin efecto sedante"
                      }
                ],
                alimentos:'',
                otros:''
                }
        }
        
        res.json(json);
    });
    pruebasRouter.route("/principiosActivos")
    .get(async function(req,res){
        res.header("Content-Type", "application/json; charset=utf-8"); 
        let json=[
            {
              "id": 1,
              "descripcion": "Cetirizina - Antihistamínico de segunda generación para rinitis alérgica y urticaria"
            },
            {
              "id": 2,
              "descripcion": "Loratadina - Antihistamínico no sedante para alergias estacionales"
            },
            {
              "id": 3,
              "descripcion": "Desloratadina - Metabolito activo de la loratadina con efecto prolongado"
            },
            {
              "id": 4,
              "descripcion": "Fexofenadina - Antihistamínico para alergias respiratorias sin efecto sedante"
            },
            {
              "id": 5,
              "descripcion": "Prednisona - Corticoide sistémico para reacciones alérgicas graves"
            },
            {
              "id": 6,
              "descripcion": "Montelukast - Antagonista de leucotrienos para asma alérgica"
            },
            {
              "id": 7,
              "descripcion": "Adrenalina - Emergencias anafilácticas (autoinyector)"
            },
            {
              "id": 8,
              "descripcion": "Olopatadina - Antihistamínico tópico para conjuntivitis alérgica"
            },
            {
              "id": 9,
              "descripcion": "Pseudoefedrina - Descongestionante nasal para alergias con congestión"
            },
            {
              "id": 10,
              "descripcion": "Omalizumab - Anticuerpo monoclonal para alergias graves persistentes"
            }
          ]
        res.json(json);
    });

    pruebasRouter.route("/diagnosticoXAtencion")
    .get(async function(req,res){
        res.header("Content-Type", "application/json; charset=utf-8"); 
        var data = req.query
        let json=[]
        if(data.codAtencion=='AT-202302-001'){
            json=[
                {
                  "idDiag": 5,
                  "cie": "I10",
                  "diagnostico": "Hipertensión esencial",
                  "tipoDiag": "P",
                  "especificion": "Presión arterial elevada sin causa identificada"
                },
                {
                  "idDiag": 1,
                  "cie": "E11.9",
                  "diagnostico": "Diabetes mellitus tipo 2",
                  "tipoDiag": "P",
                  "especificion": "Sin complicaciones agudas"
                }
              ]
        }
        
        res.json(json);
    });
    pruebasRouter.route("/diagnosticoFavoritos")
    .get(async function(req,res){
        res.header("Content-Type", "application/json; charset=utf-8"); 
        let json=[
            
            {
              "idDiag": 1,
              "cie": "E11.9",
              "diagnostico": "Diabetes mellitus tipo 2",
              "tipoDiag": "P",
              "especificion": "Sin complicaciones agudas"
            },
            {
              "idDiag": 2,
              "cie": "E03.9",
              "diagnostico": "Hipotiroidismo no especificado",
              "tipoDiag": "P",
              "especificion": "Disfunción tiroidea de origen autoinmune"
            },
            {
              "idDiag": 3,
              "cie": "E05.90",
              "diagnostico": "Hipertiroidismo",
              "tipoDiag": "P",
              "especificion": "Bocio tóxico sin tormenta tiroidea"
            },
            {
              "idDiag": 4,
              "cie": "E24.9",
              "diagnostico": "Síndrome de Cushing",
              "tipoDiag": "P",
              "especificion": "Hipercortisolismo de origen hipofisario"
            },
            {
                "idDiag": 5,
                "cie": "I10",
                "diagnostico": "Hipertensión esencial",
                "tipoDiag": "P",
                "especificion": "Presión arterial elevada sin causa identificada"
              },
            {
              "idDiag": 6,
              "cie": "E88.81",
              "diagnostico": "Síndrome metabólico",
              "tipoDiag": "P",
              "especificion": "Resistencia a la insulina con obesidad abdominal"
            },
            {
              "idDiag": 7,
              "cie": "E28.2",
              "diagnostico": "Síndrome de ovario poliquístico",
              "tipoDiag": "P",
              "especificion": "Hiperandrogenismo con anovulación crónica"
            },
            {
              "idDiag": 8,
              "cie": "E66.9",
              "diagnostico": "Obesidad",
              "tipoDiag": "P",
              "especificion": "IMC ≥30 sin comorbilidades graves"
            }
          ]
        res.json(json);
    });



module.exports = pruebasRouter