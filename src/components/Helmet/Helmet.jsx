

function Helmet({title, children}) {
    document.title = 'Yolo-' + title
    return ( 
        <div>
            {
                children
            }
        </div>
     );
}

export default Helmet;