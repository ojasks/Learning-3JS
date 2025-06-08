coming to the geometries in 3 js
till now we have used only BOXGEOMETRY
composed of vertices and faces
each vertice can also be used to represent a particle


now each of these vertices can have 
position
uv
normals
... (everything that you want)

we will see all the geometries from the buffer goemetry class
you are not going to move the mesh you are going to move the vertices

BOX
PLANE 
CIRCLE 
CONE
CYLINDER 
RING
TORUS
TORUS KNOT
DODECAHEDRON 
OCTAHEDRON
TETRAHEDRON
ICOSAHEDRON
SPHERE
SHAPE
TUBE 
EXTRUDE
LATHE 
TEXT

6 PARAMETERS
width
height
depth
width segments:- how many subdivisions in x axis
height segments:-  how many subdivisions in y axis
depth segments:-  how many subdivisions in z axis

subdivisions - correspond to how many triangles should compose a face
1 = 2 triangles per face
2 = 8 triangles per face
we cannot see these trianlges
more triangles more details

now to see those triangles
you can do wireframe : true on material

before creating a new geometry 
we need to understand how to store buffer geometry data
we are going to use float32array(native js nothing related to 3js)
it is typed, only store floats, fixed, easier to handle for the computer

2 ways to create and fill the float32array

we can then convert that float32 array to a buffer attribute

for position we are having 3 values per vertex
for uv 2 values

float32array -> postionsArray -> positionsAttribute -> geometry
we do 50 * 3 * 3
as we want 50 triangles with 3 vertexes per triangle and 3 coordinate values per vertex
const positionAttribute = new THREE.BufferAttribute(positionArray,3)
3 INDICATES HOW MUCH VALUES THE PROGRAM IS SUPPOSED TO TAKE FOR ONE VERTEX


INDEX...
