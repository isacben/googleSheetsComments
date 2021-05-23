function createParagraph(lan, name, gender, options, worked, inClass, working, attendance, assignments, readSpanish, readEnglish, sri, sriLevel, benefit, writing, math, mathTest, encourage) {

var paragraph = "";
var optionsArr = options.split(", ").join(",").split(",");
var inClassArr = inClass.replace(", ", ",").split(",");
var writingArr = writing.replace(", ", ",").split(",");

  if (lan === 0) {
    
    paragraph += name + " " + 
      optionsArr.map(
        item => item.split("/")[lan]
      ).join(". ") +
      ". ";

    paragraph += gender.split("/")[lan] + 
      " ha trabajado muy duro este año y ha crecido en su capacidad para " + 
      worked.split("/")[lan] + ". ";
  
    paragraph += "En clase, " + name + " disfruta de " + 
      inClassArr.map(
        item => item.split("/")[lan]
      ).join(" y ") + ". ";
    
    paragraph += name + " está trabajando en participar más " + working.split("/")[lan] + ". ";
    paragraph += "La asistencia de " + name + 
      " para el aprendizaje en persona hasta ahora ha sido del " + 
      attendance + "%. ";

    paragraph += gender.split("/")[lan] + " ha completado " + assignments.split("/")[lan] + ". ";
    paragraph += "Actualmente " + name + " está leyendo " + readSpanish.split("/")[lan] + " nivel de grado en español ";
    paragraph += "y " + readEnglish.split("/")[lan] + " nivel de grado en inglés. "
    paragraph += gender.split("/")[lan] + " obtuvo un " + sri + " en SRI. ";
    paragraph += "Esto está " + sriLevel.split("/")[lan] + " del rango de expectativas de nivel de grado. ";
    paragraph += name + " se beneficiaría al " + benefit.split("/")[lan] + ". ";

    paragraph += "Al escribir, " + name + " está trabajando " + 
      writingArr.map(
        item => item.split("/")[lan]
      ).join(" y ")  + ". ";

    paragraph += "En matemáticas, " + name + " se está desempeñando " + math.split("/")[lan] + " nivel de grado. ";
    paragraph += "Obtuvo un " + mathTest + "% en nuestro último examen de matemáticas de la unidad. ";
    paragraph += "¡Por favor, continúen animando a " + name + " a " + encourage.split("/")[lan] + " durante el verano. "
    paragraph += "¡Fue un placer tener a " + name + " en mi clase!"
  } 

  else {

    paragraph += name + " " + 
      optionsArr.map(
        item => item.split("/")[lan]
      ).join(". " + gender.split("/")[lan] + " ") +
      ". ";

    paragraph += gender.split("/")[lan] + 
      " has worked very hard this year and has made growth in " + 
      worked.split("/")[lan] + ". ";
    
    paragraph += "In class, " + name + " enjoys " + 
      inClassArr.map(
        item => item.split("/")[lan]
      ).join(" and ") + ". ";
    
    paragraph += working.split("/")[lan] + ", " + name + " is working on participating more. ";
    paragraph += name + "'s attendance for in-person learning so far has been " + attendance + "%. ";
    paragraph += gender.split("/")[lan] + " has completed " + assignments.split("/")[lan] + " of the assignments. ";
    paragraph += "Currently " + name + " is reading " + readSpanish.split("/")[lan] + " grade level in Spanish ";
    paragraph += "and " + readEnglish.split("/")[lan] + " grade level in English. "
    paragraph += gender.split("/")[lan] + " scored a " + sri + " in SRI. ";
    paragraph += "This is " + sriLevel.split("/")[lan] + " the range for grade level expectations. ";
    paragraph += name + " would benefit from " + benefit.split("/")[lan] + ". ";

    paragraph += "In writing, " + name + " is working on " + 
      writingArr.map(
        item => item.split("/")[lan]
      ).join(" and ")  + ". ";

    paragraph += "In math, " + name + " is performing " + math.split("/")[lan] + " grade level. ";
    paragraph += gender.split("/")[lan] + " scored " + mathTest + "% on our last Unit math test. ";
    paragraph += "Please continue to encourage " + name + " to " + encourage.split("/")[lan] + " over the summer! "
    paragraph += "It was a pleasure to have " + name + " in my class!"
  }
  
  return paragraph;
}
