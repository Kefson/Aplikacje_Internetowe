const fields = [
{txt:1, row:4, col:1 },
    {txt:2, row:4, col:2 },
    {txt:3, row:4, col:3 },
    {txt:4, row:3, col:1 },
    {txt:5, row:3, col:2 },
    {txt:6, row:3, col:3 },
    {txt:7, row:2, col:1 },
    {txt:8, row:2, col:1 },
    {txt:9, row:2, col:2 },
    {txt:0, row:5, col:'1/span 2' },
    {txt:'c', row:4, col:1 },
    {txt:'+', row:4, col:1 },
    {txt:'-', row:4, col:4 },
    {txt:'=', row:5, col:3 },
    {txt:'.', row:5, col:4 },
    {txt:'Display', row:1, col:'1/span 4' }]

const init = () => {

    const container = document.getElementById('div');
    container.id = 'container'

    fields.forEach(each_array_element => {
       const div = document.createElement('div');

       div.textContent = each_array_element.text;
       div.style.gridColumn =each_array_element.col;
       div.style.gridRow = each_array_element.row;
       if(each_array_element === 'Display') {
        div.id='display';
       } else {
        div.addEventListener('click',ev => {
 const d = document.getElementById('display')
 d.textContent = ev.target.textContent;
        });
       }

container.appendChild(div);
    })
    document.body.appendChild(container);
}

window.addEventListener('DOMContentLoaded', init);
