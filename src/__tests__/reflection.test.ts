import { creerClasseParReflexion } from "../reflection";

describe("creerClasseParReflexion()", () => {
    test("devrait créer une classe avec le nom spécifié", () => {
        process.env.CLASS_NAME = "Test";
        let classe = creerClasseParReflexion();
        expect(classe.name).toEqual("Test");
    });

    test("devrait créer une classe avec le nom spécifié", () => {
        process.env.CLASS_NAME = "NouveauTest";
        let classe = creerClasseParReflexion();
        expect(classe.name).toEqual("NouveauTest");
    });

    test("devrait retourner une erreur si la variable d'environnement CLASS_NAME n'est pas définie", () => {
        process.env.CLASS_NAME = undefined;
        expect(creerClasseParReflexion).toThrowError();
    });
});
