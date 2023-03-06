export const convertSnakeToSentenceCase = (str: String): string => {
    const result = str.replace(/^_*(.)|_+(.)/g, (s, c, d) => c ? c : ' ' + d).toLowerCase();
    return result.charAt(0).toUpperCase() + result.slice(1);
}