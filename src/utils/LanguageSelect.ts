export function t(language: string | null, english: string, french: string) {
    if(language !== "EN") {
        return french;
    }
    return english;
}
