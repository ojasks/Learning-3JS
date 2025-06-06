//console.log('Hello Three.js')
// Make sure THREE is loaded
// console.log(THREE) // ✅ This should now work

// Example usage
// const scene = new THREE.Scene();

// THE THREE SHOULD BE IN UPPERCASE DONT MESS THIS UP


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

// we cant see anything because the camera is inside the cube we need to move the camera backwards


// for camera
//position
//rotation
//scale


//loading three.js with a <script> has limitations 
// it does;nt include all of thwe classes 
//we are going to use a bundler
// a tool which you will put on your computer in which you will send html,js etc
// the bundler applies potential modifications and output a web friendly bundle
// can also run a local server 


// we will use webpack

// npm is dependencies manager
// on clicking npm run dev the webpage would open blank white
