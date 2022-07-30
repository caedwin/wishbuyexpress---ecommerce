


const btnAddCategoria = document.querySelector('[data-btn-categoria]');
const inputCategoria = document.querySelector('[data-input-categoria]');
const inputValue = inputCategoria.value;
const addCategory = ()=>{
    
    const categoria = document.querySelector('[data-container-principal]');
    
    
    const list = document.querySelector('[data-option-category]');
    const addCategoria = document.createElement('option')

    inputCategoria.value = "";
    
    const contenido = `<option 
    value="${inputValue}" 
    id="" 
    >${inputValue}
    </option>`;


    if(inputValue === ""){
        return;
    }
    

    const categoriaObj = {
        inputValue,
       
    };

    const categoryList = JSON.parse(localStorage.getItem("task" || []));
    categoryList.push(categoriaObj);
    localStorage.setItem("task", JSON.stringify(categoryList))


    addCategoria.appendChild(contenido);
    console.log(addCategoria.appendChild(contenido))

    
};









btnAddCategoria.addEventListener('click', addCategory)
    
   // window.location.href = 'http://127.0.0.1:5501/paginas/agregar-nuevo.html';





