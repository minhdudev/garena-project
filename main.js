
const url_api = "https://randomuser.me/api/?results=20"
const list = document.getElementById('list');
const search = document.getElementById('search');
const listItems=[];

search.addEventListener('input', (e) =>filterInput(e.target.value))

async function getData(){
    const responseApi = await fetch(url_api);
    // console.log('response api', responseApi);
    // const data = await responseApi.json();    console.log('data', data)
    const {results } = await responseApi.json();
    list.innerHTML=`<p style="color: white">loading...</p>`;
    setTimeout(()=>{
        list.innerHTML=``;
         results.forEach(result => {
            // console.log('results', results)
            const divItem = document.createElement('div');

            listItems.push(divItem);

            divItem.innerHTML =
            `<div class="friend">
            <img src="${result.picture.thumbnail}" alt="avatar" srcset="">
             <div>
            <h3>${result.name.first} ${result.name.last}</h3>
            <p>ẩn</p>
        </div>
        </div>
            `;
            list.appendChild(divItem)
    });
    }, 2000)
  
}
function filterInput(keySearch){
    const search = keySearch.toLowerCase();
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(search)){
            item.classList.remove('hidden');
        }
        else{
            item.classList.add('hidden');
        }
    })
    console.log('key', keySearch)
}
getData()