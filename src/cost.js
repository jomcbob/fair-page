export {loadCost} 

const loadCost = function(){
    let content = document.querySelector('.content')
    content.innerHTML = ``
    content.innerHTML = `
    <section id="processing-costs">
        <h3>Processing Costs</h3>
        <ul>
            <li>Turkey: $?</li>
            <li>Rabbit pen: $?</li>
            <li>Beef: $?</li>
            <li>Hog: $?</li>
            <li>Lamb/Goat: $?</li>
        </ul>
        <p>Sales committee members and volunteers will be available to assist with any questions about the bidding process.</p>
    </section>
    `
}