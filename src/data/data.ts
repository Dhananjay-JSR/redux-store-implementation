export type  MyStoreProps = Array<ItemStructure>


export interface ItemStructure {
    ItemName:String;
    ItemsAuthor:String;
    ItemPrice:number;
    RemainingItems:number;
    ItemsImage:String;
    ProductID:number
}

export const MyStore:MyStoreProps= [
    {
        ProductID: 1,
        ItemName: 'Designing Data-Intensive Applications ',
        ItemsAuthor: 'Kleppmann Martin',
        ItemPrice: 1600,
        ItemsImage: 'https://rukminim1.flixcart.com/image/416/416/k6v2ykw0/book/2/4/0/designing-data-intensive-applications-original-imafp873jeq3z7fr.jpeg?q=70',
        RemainingItems: 100,

    },{
        ProductID: 2,
        ItemName: 'System Design Interview ',
        ItemsAuthor: 'Alex Xu',
        ItemPrice: 220,
        ItemsImage: 'https://rukminim1.flixcart.com/image/416/416/kgtqhe80/book/1/0/5/system-design-interview-an-insider-s-guide-original-imafwz6dw2paph2y.jpeg?q=70',
        RemainingItems: 50,
    },{
        ProductID: 3,
        ItemName: 'How to Solve it by Computer',
        ItemsAuthor: 'Dromey R.Geoff',
        ItemPrice: 749,
        ItemsImage: 'https://rukminim1.flixcart.com/image/416/416/kjiwfbk0-0/book/0/v/b/how-to-solve-it-by-computer-original-imafz2y3ybxvfnwy.jpeg?q=70',
        RemainingItems: 6,
    },
        {
            ProductID: 4,
            ItemName: 'Gayle Laakmann McDowell',
            ItemsAuthor: 'Dromey R.Geoff',
            ItemPrice: 599,
            ItemsImage: 'https://rukminim1.flixcart.com/image/416/416/kpinwy80/book/y/7/w/cracking-the-coding-interview-189-programming-questions-and-original-imag3qh8hpmzuwza.jpeg?q=70',
            RemainingItems: 15,
        },{
            ProductID: 5,
            ItemName: 'Elements of Programming Interviews ',
            ItemsAuthor: 'Adnan Aziz Amit Prakash Tsung-Hsien Lee',
            ItemPrice: 650,
            ItemsImage: 'https://rukminim1.flixcart.com/image/416/416/book/4/4/9/elements-of-programming-interviews-original-imadgghpkcac5uzv.jpeg?q=70',
            RemainingItems: 58,
        },
        {
            ProductID: 6,
            ItemName: 'Operating System Concepts',
            ItemsAuthor: 'Silberschatz Abraham',
            ItemPrice: 585,
            ItemsImage: 'https://rukminim1.flixcart.com/image/416/416/k70spzk0/book/2/7/0/operating-system-concepts-international-student-version-original-imafpchnqbhpcuhg.jpeg?q=70',
            RemainingItems: 97,
        },{
            ProductID: 7,
            ItemName: 'Algorithms For Interviews',
            ItemsAuthor: 'Amit Prakash',
            ItemPrice: 585,
            ItemsImage: 'https://rukminim1.flixcart.com/image/416/416/book/7/0/8/algorithms-for-interviews-original-imadbtu2pfyzmrdg.jpeg?q=70',
            RemainingItems: 97,
        },{
            ProductID: 8,
            ItemName: 'Dynamic Programming for Coding Interviews',
            ItemsAuthor: 'Rawat Kamal',
            ItemPrice: 359,
            ItemsImage: 'https://rukminim1.flixcart.com/image/416/416/kjlrb0w0-0/book/s/x/x/dynamic-programming-for-coding-interviews-original-imafz4emrpndwrmz.jpeg?q=70',
            RemainingItems: 17,
        },{
            ProductID: 9,
            ItemName: 'Design Patterns : Elements of Reusable Object-Oriented',
            ItemsAuthor: 'John Vlissides',
            ItemPrice: 667,
            ItemsImage: 'https://rukminim1.flixcart.com/image/416/416/book/4/0/2/design-patterns-elements-of-reusable-object-oriented-software-original-imaerfy3qddhaep2.jpeg?q=70',
            RemainingItems: 79,
        },{
            ProductID: 10,
            ItemName: 'The Pragmatic Programmer, 20th Anniversary Edition',
            ItemsAuthor: ' Andrew Hunt',
            ItemPrice: 569,
            ItemsImage: 'https://rukminim1.flixcart.com/image/416/416/ks7tuvk0/book/g/i/d/the-pragmatic-programmer-20th-anniversary-edition-your-journey-original-imag5u3ze9jtyjam.jpeg?q=70',
            RemainingItems: 17,
        }
    
]