const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },

    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },

    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },

    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },

    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },

    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },

    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },

    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },

    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },

  ];


let menuDOM = document.querySelector(".section-center")

function createButtons(){
    let buttonContainerDOM = document.querySelector(".btn-container");

    let button = document.createElement('button');
    button.classList.add('btn-margin-right', 'btn-outline-dark', 'all', 'btn-block')
    button.innerHTML = "All"
    buttonContainerDOM.appendChild(button);

    let button2 = document.createElement('button');
    button2.classList.add('btn-margin-right', 'btn-outline-dark', 'korea', 'btn-block')
    button2.innerHTML = "Korea"
    buttonContainerDOM.appendChild(button2);

    let button3= document.createElement('button');
    button3.classList.add('btn-margin-right', 'btn-outline-dark', 'japan', 'btn-block')
    button3.innerHTML = "Japan"
    buttonContainerDOM.appendChild(button3);

    let button4 = document.createElement('button');
    button4.classList.add('btn-margin-right', 'btn-outline-dark', 'china', 'btn-block')
    button4.innerHTML = "China"
    buttonContainerDOM.appendChild(button4);

}
createButtons()

function createFood(food){ // eklenecek her yemeğin kendi boyutudur
    let card = `
        <div class="menu-items col-md-6"> 
            <img class="photo" src="${food.img}">
        
            <div class="menu-info">
                <div class="menu-title">
                    <div class="h4">${food.title}</div> 
                    <div class="h4">${food.price}</div>     
                </div>
                <div class="menu-text">
                    <div class="desc-size">${food.desc}</div>
                </div>
            </div>
        </div>
     `
    return card
}

function listAllFood(){
    let allFood = ""
    menu.map(item => {
        allFood += createFood(item)
    })
    menuDOM.innerHTML = allFood
}

document.addEventListener("DOMContentLoaded", listAllFood)

function listKoreanFood(){
    let koreanFood=""

    menu.map(item => {
        if(item.category == "Korea")
            koreanFood += createFood(item)
    })
    menuDOM.innerHTML = koreanFood
}

document.querySelector(".korea").addEventListener("click", listKoreanFood)

function listJapaneseFood(){
    let japaneseFood=""

    menu.map(item => {
        if(item.category == "Japan")
        japaneseFood += createFood(item)
    })
    menuDOM.innerHTML = japaneseFood
}

document.querySelector(".japan").addEventListener("click", listJapaneseFood)

function listChineseFood(){
    let chineseFood=""

    menu.map(item => {
        if(item.category == "China")
        chineseFood += createFood(item)
    })
    menuDOM.innerHTML = chineseFood
}

document.querySelector(".china").addEventListener("click", listChineseFood)

document.querySelector(".all").addEventListener("click", listAllFood)

