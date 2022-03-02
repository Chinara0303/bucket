let basket=JSON.parse(localStorage.getItem('basket'))


for(let prod of basket){
    let tbody=document.querySelector('#tbody')

    let tr=document.createElement('tr');
    tr.innerHTML=`<i class="fa-solid fa-trash-can remove"></i>`
    let tdId=document.createElement('td');
    let tdName=document.createElement('td');
    let tdImg=document.createElement('td');
    let tdQuantity=document.createElement('td');
    let img=document.createElement('img');

    tdId.innerText=prod.id
    tdName.innerText=prod.name
    img.setAttribute('src',prod.img)
    tdImg.append(img);  
    tdQuantity.innerText=prod.count

    tr.append(tdName,tdId,tdImg,tdQuantity);
    tbody.append(tr);

    let remove=document.querySelectorAll('.remove');
    for(let icon of remove){
        icon.addEventListener('click',function(){
            for(let i=0; i<basket.length; i++){
                if(basket[i].id===icon.nextElementSibling.nextElementSibling.innerText){
                    basket.splice(i,1);
                    localStorage.setItem("basket", JSON.stringify(basket));
                    window.location.reload();
                }
            }

        })
    }
    
}


