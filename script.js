import { Player } from "./player.js"



const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
canvas.width = document.documentElement.clientWidth
canvas.width = document.documentElement.clientHeight

let player = new Player(canvas.width/2, canvas.height/2,context) 
animate()

function animate() {
    requestAnimationFrame(animate);
    player.drawImg()

}