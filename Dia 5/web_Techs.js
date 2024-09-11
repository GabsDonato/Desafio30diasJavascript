const webTechs = (
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  )

  //5. No array webTechs, verifique se Sass existe no array e, se existir, imprima 'Sass é um pré-processador CSS'. Se não existir, adicione Sass ao array e imprima o array;

  let add = webTechs.indexOf('Sass')

if (index !== -1) {
    console.log('Sass é um pré-processador CSS');
} else {
    webTechs.push('Sass');
    console.log('Sass foi adicionada');
}

console.log(webTechs);