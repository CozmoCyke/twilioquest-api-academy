module.exports = async (helper) => {
  const answer1 = helper.getNormalizedInput('answer1');
  const answer2 = helper.getNormalizedInput('answer2');

  if (answer1 === '' || answer2 === '') {
    return helper.fail(`
    Veuillez répondre aux deux questions !
    `);
  }

  if (answer1 !== 'false') {
    return helper.fail(`
    La première réponse est incorrecte - les API distantes ont créé des ressources informatiques
    et du code qui peuvent résider sur d'autres ordinateurs (serveurs) sur un site Web.
    `);
  }

  if (!answer2 || answer2 !== 'rest') {
    return helper.fail(`
    La deuxième réponse est incorrecte - la version étendue de l'acronyme que nous 
    recherchons est "Representational State Transfer". Vérifiez la vidéo de Craig 
    encore une fois pour cet acronyme de quatre lettres.
    `);
  }

  return helper.success(`
  Vous avez réussi ! Vous avez ouvert le coffre de la connaissance pour la Maison Hopper.
  `);
};
