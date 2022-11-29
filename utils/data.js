import bcrypt from 'bcryptjs';

const data={
    users:[
        {
            name:'John',
            email:'johndoe@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,

        },
        {
            name:'Raimi',
            email:'raimi@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,

        }
    ]
    ,
    products:[
        {
            name:'Free Shirt',
            slug:'free-shirt',
            category:'Shirts',
            image:'/images/art.jpg',
            price: 70,
            brand: 'Nike',
            rating: 4.5,
            numReviews:8,
            countInStock: 20,
            description:'A pouplar shirt'
        },

        {
            name:'Fit Shirt',
            slug:'fit-shirt',
            category:'Shirts',
            image:'/images/ghib2.jpg',
            price: 60,
            brand: 'Adidas',
            rating: 4,
            numReviews: 20,
            countInStock: 20,
            description:'A pouplar shirt'
        },
        {
            name:'Puma Pant',
            slug:'puma-pant',
            category:'Pant',
            image:'/images/aira.jpg',
            price: 70,
            brand: 'Puma',
            rating: 5,
            numReviews:8,
            countInStock: 0,
            description:'A pouplar shirt'
        },
        {
            name:'Zara Pant',
            slug:'zara-pant',
            category:'Pant',
            image:'/images/spira.jpg',
            price: 30,
            brand: 'Zara',
            rating: 3,
            numReviews: 18,
            countInStock: 10,
            description:'A pouplar shirt'
        }
    ]
}

export default data