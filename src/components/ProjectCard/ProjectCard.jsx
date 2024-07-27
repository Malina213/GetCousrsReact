
function ProjectCard(props){
    return(
        <li className="menu__item" style={{backgroundImage:`url(${props.urlBg})`}}>
            <div className="menu__item-info">
                <div className="transport">{props.methood}</div>
                {props.isNew && (<div className="count">
                    <div>{props.count}</div>
                    <img src='/count.svg' alt="count" />
                </div>)}
            </div>
            <h2 className="menu__item-title">{props.city}, {props.month} — {props.price}</h2>
        </li>
    )
}
export default ProjectCard