// Author: Elias Grinwis Plaat Stultjes

// HIER ZET IK ALLES IN EEN VARIABELE VAN MIJN FOTOS
const images = document.querySelectorAll('.img-container img');
const textBlock = document.querySelector('.text-block');
const textHeader = document.querySelector('.text-header');
const textparagraph = document.querySelector('.text-paragraph');
const button = document.querySelector('.alert a');

const allImages = document.querySelector('.img-container');
const alert = document.querySelector('.alertDownload');

// STANDAARD IS TEXTBLOCK DISPLAY NONE (dus niet zichtbaar)

textBlock.style.display = 'none';

// JAVA EXAMPLE VARIABLES
const code = document.getElementById('code');
const runCode = document.getElementById('runCode');
const resetCode = document.getElementById('restCode');

const showJavaExample = document.getElementById('showJavaExample');
const javaExample = document.getElementById('javaExample');
console.log(code);
console.log(runCode);
console.log(resetCode);

// STANDAARD IS JAVAEXAMPLE DISPLAY NONE (dus niet zichtbaar)

javaExample.style.display = 'none';

// ALS WE OP (RUN CODE) DRUKKEN DAN VERANDERD DE TEKST NAAR (Hello World!)

runCode.addEventListener('click', () => {
    code.textContent = 'Hello World';
});

// ALS WE OP (RESTCODE) DRUKKEN DAN VERANDERD DE TEKST NAAR DEFAULT

resetCode.addEventListener('click', () => {
    code.textContent =
        'public class Main {\n' +
        '  public static void main(String[] args) {\n' +
        '    System.out.println("Hello World");\n' +
        '  }\n' +
        '}';
});

// STANDAARD IS HET JAVA EXAMPLE OP DISPLAY NONE (dus niet zichtbaar) JE MOET ECHT OP EEN KNOP DRUKKEN OM HET JAVA EXAMPLE TE KUNNEN ZIEN
// OOK HIER WEER HEB IK GEZORGD VOOR MEER INTERACTIE

showJavaExample.addEventListener('click', () => {
    javaExample.style.display = 'block';
});

// HIER LOOPEN WE DOOR ELKE IMAGE EN WANNEER ER OP EEN IMAGE GEKLIKT WORDT DAN GAAN ALLE IMAGES IN DISPLAY NONE (dus niet zichtbaar) EN AAN DE HAND VAN OP WELKE FOTO JE KLIKT KRIJG JE BEPAALDE INFORMATIE TE ZIEN

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', () => {
        allImages.style.display = 'none';
        if (i === 0) {
            textBlock.style.display = 'block';
            textHeader.textContent = 'Eclipse';
            textparagraph.textContent =
                'Eclipse is an integrated development environment (IDE) used in computer programming. It contains a base workspace and an extensible plug-in system for customizing the environment. It is the second-most-popular IDE for Java development, and, until 2016, was the most popular.';
            button.href = 'https://www.eclipse.org/downloads/';
        }
        if (i === 1) {
            textBlock.style.display = 'block';
            textHeader.textContent = 'Intellij';
            textparagraph.textContent =
                'IntelliJ IDEA is a special programming environment or integrated development environment (IDE) largely meant for Java. This environment is used especially for the development of programs. It is developed by a company called JetBrains, which was formally called IntelliJ.';
            button.href = 'https://www.jetbrains.com/idea/download/#section=windows';
        }
        if (i === 2) {
            textBlock.style.display = 'block';
            textHeader.textContent = 'NetBeans';
            textparagraph.textContent =
                'NetBeans IDE is a free and open source integrated development environment for application development on Windows, Mac, Linux, and Solaris operating systems. The IDE simplifies the development of web, enterprise, desktop, and mobile applications that use the Java and HTML5 platforms.';
            button.href = 'https://netbeans.apache.org/download/index.html';
        }
    });
}

// EN OOK HIER WEER ALS WE OP EEN KRUISJE DRUKKEN DAN KOMEN ALLE DRIE FOTOS TERUG IN EEN DISPLAY FLEX (dus weer zichtbaar)

alert.addEventListener('click', () => {
    allImages.style.display = 'flex';
    textBlock.style.display = 'none';
});
