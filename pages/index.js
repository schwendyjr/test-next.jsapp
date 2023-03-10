import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'


export default function Home() {
  
const router = useRouter();

const [formData, setFormData] = useState({
  firstName: '',
  username:''
})

const CheckLogin = () => {
  console.log(formData.firstName)
  console.log(formData)

  if(formData.username !==null){
    router.push({
      pathname: './counter',
      query: {
        username: formData.username
      }
    })
  }
}

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 class="hero">Welcome to my site!</h1>
      <main className={styles.main}>
        <input
          type="text"
          placeholder='First Name'
          id="first"
          name="first"
          pattern="[A-Z]{1}[a-z]{2,10}"
          title="The first letter should be capital"
          onChange={(e => setFormData({...formData, firstName: e.target.value}))}
          />

        <input
         type="text"
         placeholder='Username'
         id="username"
         name="username"
         required
         title="The first letter should be capital"
         minLength="5"
         maxLength="10"
         onChange={(e => setFormData({...formData, username: e.target.value}))}

         />

         <button type="submit" class="button" onClick={() => CheckLogin()}>Submit</button>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
