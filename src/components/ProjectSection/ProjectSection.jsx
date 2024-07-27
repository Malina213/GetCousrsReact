import ProjectCard from '../ProjectCard/ProjectCard'
import '../ProjectSection/ProjectSection.css';





const projects = [
  {
    methood : 'На автобусе',
    count : '10',
    city : 'Тбилиси',
    isNew : true ,
    month : 'апрель',
    price : '83.000',
    urlBg : '/bg/bg1.png',
   
  },
  {
    methood : 'На самолёте',
    count : '10',
    city : 'Стамбул',
    isNew : false ,
    month : 'март',
    price : '110.000',
    urlBg : '/bg/bg2.png',
  },
  {
    methood : 'На самолёте',
    count : '15',
    city : 'Дубай',
    isNew : true ,
    month : 'июнь',
    price : '220.000',
    urlBg : '/bg/bg3.png',
   
  },
  {
    methood : 'Самолёт + паром',
    count : '11',
    city : 'Пхукет',
    isNew : true ,
    month : 'сентябрь',
    price : '135.000',
    urlBg : '/bg/bg4.png',
  },

];

function ProjectSection(){
    return(
        <nav className='menu'>
            <ul className='menu-list'>
                {projects.map((element,index) => (
                    <ProjectCard 
                        key={index}
                        methood = {element.methood}
                        count = {element.count}
                        city = {element.city}
                        isNew = {element.isNew}
                        month = {element.month}
                        price = {element.price} 
                        urlBg = {element.urlBg}
                      />
                )) }
            </ul>
        </nav>
    )
}
export default ProjectSection