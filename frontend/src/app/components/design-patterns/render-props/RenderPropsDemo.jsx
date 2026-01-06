'use client';

function ListItem ({items, render}){
    return(
        <div>
            {
                items.map((item, index) => render(item, index))
            }
        </div>
    )
}

export default function RenderPropsDemo() {
    let items = ['apple', 'orange', 'mango'];

    return (
        <div>
            Why Render Props
            <ListItem items={items} render={ (item,index) => (<h1 key={index}>{item}</h1>)}/>
        </div>
    )
}