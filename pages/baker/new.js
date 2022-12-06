export default function Home(props)
{ 
  
  return ( <>
        <form method="POST" action="/api/bakers">
          <label htmlFor="image">Insert Image:</label><br/>
          <input type="file" id="image" name="image"></input><br /><br />
          <label htmlFor="name">name:</label><br />
          <input type="text" id="name" name="name" /><br /><br />
          <label htmlFor="description">description:</label><br />
          <input type="text" id="description" name="description" /><br /><br />
          <label htmlFor="price">Price:</label><br />
          <input type="text" id="price" name="price" /><br /><br />
          <label htmlFor="location">location:</label><br />
          <input type="text" id="location" name="location" /><br /><br />
          <input type="submit" value="submit" />
        </form>
    </>)
}