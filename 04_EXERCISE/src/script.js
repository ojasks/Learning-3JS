import './style.css'
import * as THREE from 'three'

// root file = script file
// you dont need to add the script file inside the index html file it will be added automatically
console.log(THREE.PerspectiveCamera)
// console.log("hello webpack")
// console.log("hello Three js journey")
// also the stle file is added here only and not in the index file 
//Scene
const scene = new THREE.Scene()

//Red Cube
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({ color : 0xff0000})
const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh) // important part dont forget 
//Sizes
const sizes = {
    width:800,
    height:600
}

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
//we provide the aspect ratio
camera.position.z = 3
camera.position.x = 1
camera.position.y = 0.9
scene.add(camera)

//Renderer 
//renders the scene from the camera point of view
//result drawn into a canvas
//canvas is an html element in which you can draw stuff
const canvas = document.querySelector('.webgl')
console.log(canvas)
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene,camera)

// we cant see anything because the camera is inside the cube we need to move the camera backwards``````````````
