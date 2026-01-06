'use client';

function ListItem ({items}){
    return(
        <div>
            {
                items.map((item, index) => (
                    <div key={index}>{item}</div>
                ))
            }
        </div>
    )
}

export default  function WhyRenderProps(){

    let items = ['apple', 'orange', 'mango'];

    return (
        <div>
            Why Render Props
            <ListItem items={items}/>
        </div>
    )
}