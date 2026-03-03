document.querySelectorAll(".acc-header").forEach(h=>{
  h.addEventListener("click",()=>{
    const b=h.nextElementSibling
    document.querySelectorAll(".acc-body").forEach(x=>x.style.maxHeight=null)
    if(!b.style.maxHeight)b.style.maxHeight=b.scrollHeight+"px"
  })
})

gsap.utils.toArray(".section").forEach(sec=>{
  gsap.from(sec,{
    scrollTrigger:{trigger:sec,start:"top 80%"},
    y:40,opacity:0,duration:.8
  })
})