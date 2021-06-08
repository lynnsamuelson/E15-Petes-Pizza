import { getSizes, setSize } from './database.js'

const sizes = getSizes()

const handleChangeEvent = event => {
    if (event.target.name === 'size') {
        const sizeId = parseInt(event.target.value)
        setSize(sizeId)
    }
}

document.addEventListener('change', handleChangeEvent)

export const Sizes = () => {
    let sizeChoices = '<ul>'

    sizes.forEach(sizzle => {
        sizeChoices += `
        <li>
            <input type="radio" name="size" value="${sizzle.id}" />
            ${sizzle.size}
        </li>
        `
    })

    sizeChoices += '</ul>'

    return sizeChoices
}