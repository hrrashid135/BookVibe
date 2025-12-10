const getStoredBook = ()=>{
    const storedBookSTR = localStorage.getItem('wishListBooks');
    if(storedBookSTR){
        return JSON.parse(storedBookSTR);
    }
    else{
        return [];
    }

}
const addToStore = (id)=>{
    const storedBooks = getStoredBook();
    if(!storedBooks.includes(id)){
        storedBooks.push(id);
        localStorage.setItem('wishListBooks', JSON.stringify(storedBooks));
    }
    else{
        alert('Book already in wishlist');
    }
}

export { getStoredBook, addToStore };