/**
 * Formatte un prix pour l'affichage selon la langue (Locale).
 * Pour le Québec (fr), le format est "29 $" avec un espace comme séparateur de milliers.
 * Pour l'anglais, le format est "$29" avec une virgule comme séparateur de milliers.
 */
export function formatPrice(price: string | number, lang: string = "en"): string {
    // Si c'est une chaîne qui commence par $, on extrait le nombre
    let numericValue: number;

    if (typeof price === "string") {
        // Nettoyer la chaîne pour ne garder que les chiffres (et éventuellement le point décimal)
        const cleaned = price.replace(/[^\d.]/g, "");
        numericValue = parseFloat(cleaned);

        if (isNaN(numericValue)) return price;
    } else {
        numericValue = price;
    }

    if (lang === "fr") {
        // Format Québec : 1 000 $
        const formatted = new Intl.NumberFormat("fr-CA", {
            style: "decimal",
            useGrouping: true,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(numericValue);

        // Remplacer l'espace insécable par un espace standard si nécessaire, 
        // mais Intl.NumberFormat fr-CA utilise déjà les bons séparateurs
        return `${formatted} $`;
    }

    // Format Anglais : $1,000
    const formatted = new Intl.NumberFormat("en-US", {
        style: "decimal",
        useGrouping: true,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(numericValue);

    return `$${formatted}`;
}
