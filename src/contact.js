export {loadUs} 

const loadUs = function(){
    let content = document.querySelector('.content')
    content.innerHTML = ``
    content.innerHTML = `
    <section id='us'>
        <h3>Questions?</h3>
            <p>Contact us at: <a href="#">notfakedude@real.com</a></p>
            <p></p>
            <p>Or at: <a href='#'>100%realdude@soandso.com</a></p>
    </section
    `
}