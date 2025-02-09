export const greeting = "Hello, Odinite!";
export {load4_H_Livestock_Sale} 

const load4_H_Livestock_Sale = function(){
    let content = document.querySelector('.content')
    content.innerHTML = ``
    content.innerHTML = `
    <section id="sale-info">
        <h3>The 2025 4-H Livestock Sale</h3>
        <p>The 4-H and livestock sale at the Bonneville County Fair is where youth involved in market animal projects sell their animals. All sale proceeds directly benefit individual 4-H and FFA members. Many of these youth put their earnings toward college tuition or use the money to help with raising their animals and purchasing new ones for the following year. It is a big way to show your support to the youth who have invested time and money into learning real-life skills.</p>
    </section>
    `
}