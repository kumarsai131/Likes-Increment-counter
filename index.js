const likes = document.querySelectorAll('.counter')
likes.forEach(e =>{
    e.innerText = '0'
    const updateLikes = () => {
        const target = +e.getAttribute('data-target')
        const c = +e.innerText
        const increment = target/500
        if(c<target){
            e.innerText = `${Math.ceil(c+increment)}`
            setTimeout(updateLikes,1);
        }
        else{
            e.innerText = target
        }
    }
    updateLikes()
})