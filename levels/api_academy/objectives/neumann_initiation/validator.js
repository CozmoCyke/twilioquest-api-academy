module.exports = async (helper) => {
  const answer1 = helper.getNormalizedInput("answer1");
  const answer2 = helper.getNormalizedInput("answer2");

  if (answer1 === "" || answer2 === "") {
    return helper.fail(`
    Veuillez répondre aux deux questions !
    `);
  }

  if (answer1 !== "ressource") {
    return helper.fail(`
    La première réponse est incorrecte - le nom d'un objet, auquel vous pouvez
    accéder via HTTP dans une API RESTful, commence par la lettre "R" de "URL".
    `);
  }

  if (answer2 !== "post") {
    return helper.fail(`
    La deuxième réponse est incorrecte - Craig parle du mappage des opérations "CRUD" 
    (Create, Read, Update, and Delete) dans sa vidéo - regardez encore une fois la vidéo
    pour voir quelle méthode HTTP est associée à la création.
    `);
  }

  return helper.success(`
  Vous avez réussi ! Vous avez ouvert le coffre de la connaissance de la Maison Lovelace.
  `);
};
