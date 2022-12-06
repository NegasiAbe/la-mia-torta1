import { getSession, signIn, signOut } from 'next-auth/react';

export default function Home(props) {
  const curUser = props.currentUser;
  //send the props current user to navbar componont 
  return (
    <>
      <h1>La Mia Torta Home Page</h1>
      {curUser ?
        <button onClick={() => signOut()}>Sign out</button> :
        <button onClick={() => signIn()}>Sign in</button>
      }
    </>
  )
}

export async function getServerSideProps(req, res) {
  const session = await getSession(req) //await getSession(req)
  console.log('session is', session)
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: `/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F`
        //change the destination default login in to cusotm login
      }
    }
  }

  return {
    props: { currentUser: session?.user || null },
  }
}

