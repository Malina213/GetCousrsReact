import './Heading.css'

function Heading(props){

    if (props.level === 'h1'){
        return(
          <h1 className="travel__title">{props.text}</h1>
        )
      }
      if (props.level === 'h2'){
          return(
            <h2 className="card-title">{props.text}</h2>
          )
      }
}


export default Heading
