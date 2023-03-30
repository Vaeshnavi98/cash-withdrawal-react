import './index.css'

const Denomination = props => {
  const {details, buttonDetails, key} = props
  const {value, id} = details

  const Button = () => {
    buttonDetails(value)
  }

  return (
    <li>
      <button type="button" onClick={Button} id={id}>
        {value}
      </button>
    </li>
  )
}

export default Denomination
