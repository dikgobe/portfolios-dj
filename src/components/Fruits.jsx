export default function()
{
    //const fruits = ['Apple','Mango','Banana','Orange','Pineapple'];
    const mylistOfFruits = [
        {name: 'Apple',price: 47,emoji: '🍎'},
        {name: 'Mango',price: 87,emoji: '🥭'},
        {name: 'Banana',price: 35,emoji: '🍌'},
        {name: 'Orange',price: 45,emoji: '🍊'},
        {name: 'pineapple',price: 88,emoji: '🍍'}


    ]

    return <div>
             <ul>
             {fruits.map((fruit) =>
                <li key = {fruit}> 

                </li> )}
                
            </ul>
    </div>
}