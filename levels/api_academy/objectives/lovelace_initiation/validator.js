module.exports = async (helper) => {
  const answer1 = helper.getNormalizedInput('answer1');
  const answer2 = helper.getNormalizedInput('answer2');

  if (answer1 === '' || answer2 === '') {
    return helper.fail(`
    Veuillez répondre aux deux questions !
    `);
  }

  if (answer1 !== 'http') {
    return helper.fail(`
    La première réponse est incorrecte - l'acronyme de ce protocole 
    sont les quatre premières lettres que vous tapez dans la barre d'adresse
    lorsque vous entrez l'URL d'un site Web dans votre navigateur.
    `);
  }

  if (answer2.indexOf('header') < 0) {
    return helper.fail(`
    La deuxième réponse est incorrecte - le nom de ces éléments d'information
    supplémentaires qui accompagnent les requêtes Web est peut-être le contraire
    en anglais de 'footer' ("pied de page"). 
    `);
  }

  return helper.success(`
  Vous avez réussi ! Vous avez ouvert le coffre de la connaissance de la Maison Lovelace.
  `);
};
