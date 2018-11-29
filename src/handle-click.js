import { say } from 'cowsay'

export default function handleClick() {
  alert(say({ text : "Hello from Webpack 4" }))
}
