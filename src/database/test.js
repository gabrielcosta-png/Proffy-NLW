const Database = require('./db')
const createProffy = require('./CreateProffy')

Database.then(async(db)=>{
//inserir dados
proffyValue = {
    name:"Diego Fernandes",
    avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp:"8849450480",
    bio:"Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
}

classValue={
    subject :1,
    cost:"20"
    // o proffy id vira pelo bando de dados
}

classScheduleValues = [
    {
        weekday:1,
        time_from:720,
        time_to:1220
    },
    {
        weekday:5,
        time_from:520,
        time_to:1220
    }
]
/* 
await createProffy(db,{proffyValue,classValue,classScheduleValues}) */

//consultar os dados inseridos

//todos os proffys
const selectedProffys = await db.all("SELECT* FROM proffys")
/* console.log(selectedProffys) */

//consulta as classes de um determinado professor e trazer junto os dados do professor
const selectClassesAndProffys = await db.all(`
SELECT classes.*,proffys.*
FROM proffys
JOIN classes ON(classes.proffy_id =proffys.id)
WHERE classes.proffy_id =1;
`)
/* console.log(selectClassesAndProffys) */

// O HORARIO QUE A PESSOA TRABALHA,por exemplo,é das 8h - 18h
// O HORARIO DO TIME _FROM (8H) PRECISA SER ANTES OU IGUAL AO HORARIO SOLICITADO
// O TIME_TO PRECISA SER ACIMA 
const selectClassesSchedules = await db.all(`
SELECT class_schedule.*
FROM class_schedule
WHERE class_schedule.class_id ="1"
AND class_schedule.weekday ="1"
AND class_schedule.time_from <= "1300"

`)
console.log(selectClassesSchedules)
})
