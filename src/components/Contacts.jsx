import React from "react"
import "../App.css"

const Contacts = () => {
  const [users, setUsers] = React.useState([])
  React.useEffect(() => {
    const url = "https://random-data-api.com/api/users/random_user?size=20"
    fetch(url)
      .then((response) => {
        setUsers(response.data)
      })
      .catch((err) => console.log(err))
  })

  return <div className="container">Contacts</div>
}

export default Contacts
