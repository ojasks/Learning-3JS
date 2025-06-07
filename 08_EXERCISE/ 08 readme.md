in this lesson we would try to fit in our viewport 
this is a css problem
to fix this we will go on style.css


the problem we will face is when we will resize the window 
the view port will not adjust accordingly
so now we will handle RESIZE
we will have to listen to this event through the add event listener
window.addEventListener('resize', () => {
console.log('Windows have been resized')
//update sizes
sizes.width=innerWidth
sizes.height=innerHeight
//update camera
camera.aspect= sizes.width/sizes.height
camera.updateProjectionMatrix()
})
and then update 
the renderer

if you see a blurry render oor stair pattern its because 
you are testing on a screen with pixel ratio greater than 1

highest pixel ratios are usually on the weakest devices - mobiles 
maybe 3 not more

to get current pixel ratio
write on your console
windows.devicePixelRatio

now to handle full screen
