import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'
console.log(gsap)

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
// renderer.render(scene, camera)


//npm install downloads all the dependencies we need
// reequest animation frame purpose is to call the function provided on the next frame
// we are going to call the same function on each new frame
 
//time
// let time = Date.now()
// //as the time is a variable

// const clock = new THREE.Clock()

gsap.to(mesh.position,{duration:1, delay:1, x:2})
gsap.to(mesh.position,{duration:1, delay:2, x:0})
//Animation
const tick = () =>
{
    //clock
    // const elapsedTime = clock.getElapsedTime()
    // console.log(elapsedTime)
    // //dont use the getdelta method
    // // mesh.rotation.y = elapsedTime * Math.PI * 2 // one revolution per second
    // mesh.rotation.y =elapsedTime
    // mesh.position.y =Math.sin(elapsedTime)
    // mesh.position.x =Math.cos(elapsedTime)
    // camera.lookAt(mesh.position)

    // now in place of mesh you can also move camera by changing the text to camera



    // so in some devices the rotation might be fster aka the frame rate
    //we will adapt to the frame rate 
    //Time
    // const time =Date.now()
    // console.log(time) 
    // const currentTime = Date.now()
    // const deltaTime = currentTime - time
    // time = currentTime
    // console.log(deltaTime)

    // console.log(tick)
    //update objects
    // mesh.position.x +=0.01
    // mesh.rotation.y +=0.002 * deltaTime //now its a constant
    // now this cube is rotating at the same speed regardless of the frame rate 
    //render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}
tick()



//there are many libraries we can use 
//one of them is GSAP Greensoap library
// npm install --save gsap@3.5.1 adding -- save will add dependencies to the pack.json file