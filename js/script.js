const tagUl = document.querySelector(".container__products ul")
function createCard(card){
    card.forEach(createItem)
}

function createItem(card){
    let tagLi = document.createElement("li")
    tagLi.setAttribute("class", "product__card")

    let tagImg = document.createElement("img")
    tagImg.src = card.image;

    let tagH3 = document.createElement("h3")
    tagH3.innerText = card.name;

    let tagH5 = document.createElement("h5")
    tagH5.innerText = card.description;

    let tagP = document.createElement("p")
    tagP.innerHTML = `R$ ${card.price}`

    let tagButton = document.createElement("button")
    tagButton.innerText = "adicionar ao carrinho";

    tagLi.append(tagImg, tagH3, tagH5, tagP, tagButton)
    tagUl.append(tagLi)
}

createCard(data)