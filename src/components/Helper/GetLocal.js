/**
 * 
 * @param {String} name 
 * @returns 
 */
export default function GetLocal(name) {
    if (name) {
        return JSON.parse(localStorage.getItem(name))
    }
}