
export function joinObjects(array, element) {

    if(!element) return array

    const newArray = []

    array.forEach((item, index) => {
        newArray.push(item)

        if(index !== array.length - 1) {
            newArray.push(element)
        }
    })

    return newArray
}