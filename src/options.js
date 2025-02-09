export {loadOptions} 

const loadOptions = function(){
    let content = document.querySelector('.content')
    content.innerHTML = ``
    content.innerHTML = `
    <section id="buyers-options">
        <h3>Buyer’s Options</h3>
        <ul>
            <li>If you want the whole animal: You’re responsible for both purchasing and processing costs. If you prefer to pay immediately after the sale, you can avoid being billed later.</li>
            <li>You can resell your purchase: If you prefer, you can sign your purchase back to the 4-H and FFA Committee for resale. These animals will be sold at the current market price, and you’ll only be billed for the difference between your bid and that price. For example you buy a rabbit for $100.00 and its market value is $15.00 you can resell it and only be charged $85.00</li>
            <li>Tax-deductible purchase: If you wish, you can buy an animal as a charitable donation or a goodwill gift. It may be Tax-deductible, check first to see if this applies</li>
            <li>Anonymous purchases: Purchases can be made anonymously.</li>
            <li>Can’t attend the sale? If you can’t make it, a proxy buyer can help.</li>
            <li>Don't want to come or don't have money to buy a pricy animal? We have add-ons! Add-ons are a very much appreciated way to donate, just mail money to the fair
            grounds with the kids names of who you want it to go to, this money will be given to them on top of the sale money and will help them to pay expenses.</li>
        </ul>
    </section>
    `
}