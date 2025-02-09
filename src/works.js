export {loadWorks} 

const loadWorks = function(){
    let content = document.querySelector('.content')
    content.innerHTML = ``
    content.innerHTML = `
    <section id="how-it-works">
        <h3>How Does the Sale Work?</h3>
        <p>Pre-registration is encouraged. On the day of the sale, the sale arena will open at (time). You’ll sign up to bid in the arena, receive a numbered card, and select your preferred butcher and slaughterhouse.</p>
    </section>
    `
}