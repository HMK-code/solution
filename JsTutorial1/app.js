const t1 = gsap.timeline();

t1.from(".img", {duration:3, y:-500, opacity:0})
.to(".img" ,{duration:3, y:0, opacity:1}, "-=3")
 
t1.from(".header",{duration:2,x:-300, opacity:0})
.to(".header" , {duration:2,x:0, opacity:1}, "-=2")

const t2 = gsap.timeline();

t2.from(".imgs", {duration:3, y:-500,opacity:0})
.to(".imgs", {duration:3, y:0,opacity:1}, "-=3")

t2.from(".lorem", {duration:2, x:+300, opacity:0})
.to(".lorem", {duration:2, x:0, opacity:1}, "-=2")

