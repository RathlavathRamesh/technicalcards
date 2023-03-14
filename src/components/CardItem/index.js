// Write your code here

import './index.css'

const Tech = props => {
  const {Details} = props
  const {title, description, imgUrl, className} = Details
  return (
    <li className={className}>
      <h1 className="small-heading">{title}</h1>
      <p className="small-para">{description}</p>
      <div className="new">
        <img src={imgUrl} className="avatar" alt={title} />
      </div>
    </li>
  )
}
export default Tech
