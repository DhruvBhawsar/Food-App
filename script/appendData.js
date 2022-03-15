function clicked_Search_result(ele,location) {
    location.innerHTML = null;

    let img_div = document.createElement("div");
    let img = document.createElement("img");
    img.src = ele.strMealThumb;

    let des_div = document.createElement("div");
    let des = document.createElement("p");
    des.textContent = ele.strInstructions;

    des_div.style.width = "600px";
    des_div.style.marginLeft = "20px";

    img_div.append(img);
    des_div.append(des);
    location.append(img_div, des_div);
  }

export default clicked_Search_result