const products = [
    {
        id: '1',
        name: 'Almendras',
        price: 8500,
        category: 'Frutos Secos',
        img: 'https://acdn.mitiendanube.com/stores/001/184/135/products/31-237290314da683e67f16258786198626-640-0.png',
        stock: 7,
        description: 'Descripción de Almendras',
    },
    {
        id: '2',
        name: 'Castañas de Cajú',
        price: 10800,
        category: 'Frutos Secos',
        img: 'https://greenshop.ar/wp-content/uploads/sites/9/2016/08/A.3.13-150GR.jpg',
        stock: 3,
        description: 'Descripción de Castañas de Cajú',
    },
    {
        id: '3',
        name: 'Harina de Nueces',
        price: 3200,
        category: 'Harinas',
        img: 'https://nueztra.com.mx/cdn/shop/products/Harina_de_nuez.jpg?v=1630521372',
        stock: 5,
        description: 'Descripción de Harina de Nueces',
    },
]

export const getProducts = () => {
    return new Promise ( (resolve) => {
        setTimeout ( () => {
            resolve (products)
        }, 500)
    })
}

export const getProductByID = ( productId ) => {
    return new Promise ( (resolve) => {
        setTimeout ( () => {
            resolve ( products.find (prod => prod.id === productId))
        }, 500);
    })
}

export const getProductByCategory = ( productCategory ) => {
    return new Promise ( (resolve) => {
        setTimeout ( () => {
            resolve ( products.find (prod => prod.category === productCategory))
        }, 500);
    })
}