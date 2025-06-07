Camera is an abstract class 
it is not supposed to be used directly

array camera - render the scenes from multiple cameras on speific areas of the render
stereo camera -render the scenes through two cameras that will mimic the eyes
used with devices like vr headset
cube camera - does 6 renders
 orthographic camera - renders the camera without perspective unlike
 perspective camera


 lets understand the fields of the perspective camera
 1.fields of view (75 degrees) -its the vertical one
 2.aspect ratio width/height
 3.& 4.Near and Far Parameters
 an object closer than near and further than far wont show up
do not use extreme value for near and faar as it will cause z-fighting
the gpu will have problem deciding which one is infront of other

in orthographic camera
we need to provide 
left right top bottom near far
//now the cube will look like it is squeezed or stretced
//to solve this give it an aspect ratio
multiply left and right with it 
we now have a cube

now what if we want custom control of camera through our mouse
move the camera so that it faces the cube
so comment the position related to x and y
and also stop the animation for the time being by stopping transformation in tick function
first i need to know the coordinates of my cursor 
now this is related to pure javascript
the first parameter is the name of the event and second is a callback function
using event.clientx u get the coordinates of the cursor on x axis
now these values are in pixels whereas i want them to be from 0 to 1
so now we create the values for the cursors
const cursor = {
x:0,
y:0
}
we initialize the beginning values from 0
then we assign the cursor.x=clientX divided by the size of the viewport
now the values remain between 0 and 1
now to get the values such that we have -ve and +ve values we -0.5 from cursor.x
now we can go from -0.5 to +0.5

now in rendering that is in tick function we will update the camera according to the cursor
we now invert something somewhere so that it works properly
we will also ask our camera to look at our cube after moving it
if you dont put anything in vector three its the same as putting 0,0,0


so by multiplying cursor.x with 10 we are doing many revolutions
so we want it to do 4 revolutions acc to the faces of the cube


three js has built in controls
device orientation wont work on ios

fly control
first person control - same as flycontrol
you just cant change the y axis

pointerlock just like minecraft control
its all about 
disapperaing the mouse from the screen 
and gaining all its control

orbit control - really handy
trackball control - just like orbit control - with no vertical limit
just move vertically in a kind of loop

transform control - has nothing to do with cameras
same for drag control


so we are going to use the orbit control
and for the same we will comment out the update camera section in tick function
because the orbit control will handle the camera

you cant access orbit controls usiing THREE.

implement the orbit controls just after the camera

we can also add some damping to the orbit control by giving it some acceleration
and friction
if you are using damping dont forget to update it in every frame 
by updating it in the tick functions


