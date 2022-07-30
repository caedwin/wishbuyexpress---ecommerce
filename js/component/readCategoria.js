export const readCategoria = () =>{
    const categoryList = JSON.parse(localStorage.getItem("task")) || [];
    console.log(categoryList)
}