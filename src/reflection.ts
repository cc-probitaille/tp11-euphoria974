export function creerClasseParReflexion() {
    const name = process.env.CLASS_NAME;
    if (name && name !== "undefined") {
        return new Function(`return class ${name} {}`)();
    } else {
        throw new Error(
            "La variable d'environnement CLASS_NAME n'est pas définie."
        );
    }
}
