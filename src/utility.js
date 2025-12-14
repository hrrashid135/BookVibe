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
        alert('Book added to wishlist');
    }
    else{
        alert('Book already in wishlist');
    }
}

const getReadListedBook = ()=>{
    const storedReadBookSTR = localStorage.getItem('readListBooks');
    if(storedReadBookSTR){
        return JSON.parse(storedReadBookSTR);

    }
    else{
        return [];
    }
}

const addToReadStore = (id)=>{
    const storedReadBooks = getReadListedBook();
    if(!storedReadBooks.includes(id)){
        storedReadBooks.push(id);
        localStorage.setItem('readListBooks', JSON.stringify(storedReadBooks));
        alert('Book added to read list');
    }
    else{
        alert('Book already in read list');
    }
}

export { getStoredBook, addToStore, getReadListedBook, addToReadStore };