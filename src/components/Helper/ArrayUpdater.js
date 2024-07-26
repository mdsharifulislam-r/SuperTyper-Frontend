export default function ArrayUpdater(arr, length) {
    let newArr = []
    if (arr) {
        for (let i = 0; i <= length; i++) {
            newArr.push(arr[i])
        }
    }
    return newArr
}