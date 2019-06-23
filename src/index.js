import 'bootstrap'
import './scss/index.scss'
const words = ['Hello', 'world']
words.map(word => console.log(word))
console.log(words.includes('world'))
words.flatMap(word => console.log(word))