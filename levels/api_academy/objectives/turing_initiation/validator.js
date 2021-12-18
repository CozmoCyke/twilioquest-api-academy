module.exports = async (helper) => {
  const answer1 = helper.getNormalizedInput('answer1');
  const answer2 = helper.getNormalizedInput('answer2');

  if (!answer1 || !answer2) {
    return helper.fail('Veuillez répondre aux deux questions !');
  }

  if (answer1 !== 'interface') {
    return helper.fail('La première réponse est incorrecte.');
  }

  if (answer2.indexOf('touppercase') !== 0) {
    return helper.fail(`
    La deuxième réponse est incorrecte - En JavaScript, une fonction est invoquée en utilisant
    l'opérateur "." après une variable qui fait référence à un objet, puis est invoquée avec 
    une parenthèse ouverte et fermée "()". Les objets fournissent une API à travers ces types 
    de fonctions. Quel est le nom de la fonction API utilisée dans l'exemple, qui traduit 
    la chaîne en caractères majuscules ?
    `);
  }

  return helper.success(`
  Vous avez réussi ! Vous avez ouvert le coffre de la connaissance de la Maison Turing.
  `);
};
