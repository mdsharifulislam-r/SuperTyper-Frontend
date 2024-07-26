/**
 * 
 * @param {String} name 
 * @param {any} value 
 */
export default function SetLoacl(name, value) {
    localStorage.setItem(name,JSON.stringify(value))
}