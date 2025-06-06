import './style.css'
import * as THREE from 'three'


//BEFORE ANIMATING AN OBJECT WE MUST FIRST LEARN HOW TO TRANSFORM AN OBJECT
//POSITION 
//SCALE
// ROTATION
// QUARTERNION
// node module folder has all the dependencies dont touch that folder


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

const group =new THREE.Group()
group.position.y=-2
scene.add(group) 

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0xff0000})
)
group.add(cube1)
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0x00ff00})
)
cube2.position.x=-2
group.add(cube2)
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0x0000ff})
)
cube3.position.x=2
group.add(cube3)

/**
 * Objects
 */

// const group = new THREE.Group()
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)

// mesh.position.x=0.7
// mesh.position.y=-0.6
// mesh.position.z=1
//to update these valeus all at once 

// mesh.position.set(0.7, -0.6, 1)

//changing position after rendering will cause nothing to happen so does doing it after adding to mesh
//position is inherited from vector3 


//scale
// mesh.scale.x =2
// mesh.scale.y=0.5
// mesh.scale.z=1
//all properties at once
// mesh.scale.set(2,1,1)

//to rotate we can either use rotation property or quarternion property

// mesh.rotation.reorder('YXZ')
// mesh.rotation.y=Math.PI *0.25
// mesh.rotation.x=Math.PI *0.25

//euler
//strange rotaation phenomenon
//GIMBAL LOCK
//TORESOLVE THIS REORDER, BUT DO ITBEFORE THE ROTATION




//axes helper
const axesHelper = new THREE.AxesHelper()
//you can put in values inside it to increase the size
scene.add(axesHelper)
// console.log(mesh.position.length())
// mesh.position.normalize() // will reduce until the unit is one (distance)
// console.log(mesh.position.length())
// /**
 // Sizes
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 1
camera.position.x = 1
camera.position.y = 1
scene.add(camera)
// console.log(mesh.position.distanceTo(camera.position)) 
camera.lookAt(group.position)




/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


//