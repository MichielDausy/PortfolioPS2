// Author: Elias Grinwis Plaat Stultjes

// HIER ZET IK ALLES IN EEN VARIABELE VAN MIJN RUNCODE
const runCode = document.getElementById('runCode');
const runCodeNumber = document.getElementById('runCodeNumber');
const code = document.getElementById('code');
const code2 = document.getElementById('code2');

// FLIP PYTHON EXAMPLE VARIABELEN
const pythonExamples = document.getElementById('pythonExamples');
const pythonExamplesBack = document.getElementById('pythonExamplesBack');
const flipCard = document.querySelector('.flip-card-inner-examples');

const downloadExercises = document.getElementById('downloadExercises');

// ALS WE OP DE DOWNLOAD KNOP DRUKKEN DAN VERSCHIJNT ER EEN BLOCK ELEMENT MET EEN BEDANKT TEKST

downloadExercises.addEventListener('click', () => {
    document.querySelector('.alert').style.display = 'block';
});

// ALS WE DAN OP HET KRUISJE DRUKKEN VAN DAT BLOCK ELEMENT DAN VERDWIJNT HET BLOCK ELEMENT

document.querySelector('.fa-xmark').addEventListener('click', () => {
    document.querySelector('.alert').style.display = 'none';
});

// ALS WE OP DE ACHTERKANT VAN DE KAART DRUKKEN (previous) DAN GAAT DE KAART TERUG NAAR ZIJN GEWONEN POSITIE (0deg)

pythonExamplesBack.addEventListener('click', () => {
    flipCard.style.transform = 'rotateY(0deg)';
});

// ALS WE OP DE VOORKANT VAN DE KAART DRUKKEN (More examples) DAN GAAT DE KAART 180 GRADEN DRAAIEN

pythonExamples.addEventListener('click', () => {
    flipCard.style.transform = 'rotateY(180deg)';
});

// ALS WE OP DE VOORKANT VAN DE KAART DRUKKEN (RUN CODE) DAN VERANDERD DE TEKST NAAR (Hello World!)

runCode.addEventListener('click', () => {
    code.innerText = 'Hello World!';
});

// ALS WE OP DE ACHTERKANT VAN DE KAART DRUKKEN (RUN CODE) DAN VERANDERD DE TEKST NAAR (Five is greater than two!)

runCodeNumber.addEventListener('click', () => {
    code2.innerText = 'Five is greater than two!';
});
