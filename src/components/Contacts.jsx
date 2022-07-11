import React from "react"
import "../App.css"
import Card from "./Card"
import { Container, Flex } from "./Styles.js/Contact.styled"

const Contacts = () => {
  const [users, setUsers] = React.useState([])
  React.useEffect(() => {
    const url = "https://random-data-api.com/api/users/random_user?size=20"
    try {
      let res = fetch(url)

      res
        .then((res) => res.json())
        .then((d) => {
          console.log(d)
          setUsers([...d])
        })
    } catch (error) {
      console.error(error)
    }
  }, [])

  React.useEffect(() => {
    if (users) {
      console.log(users)
    }
  }, [])

  return (
    <>
      <Container>
        <Flex></Flex>
      </Container>

      {users.map((item, key) => {
        return <Card user={item} key={key} /> ?? "hello world"
      })}
    </>
  )
}

export default Contacts
