'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
  const { data: session } = useSession()
  const [providers, setProviders] = useState()

  useEffect(() => {
    const setUpProviders = async () => {
      const res = await getProviders()
      setProviders(res)
    }

    setUpProviders()
  }, [])

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link
          href="/"
          className='btn btn-ghost normal-case text-xl'
        >
          Notes App
        </Link>
      </div>
      <div className="flex-none gap-2">

        {session?.user ? (
          <>
            <div className="form-control">
              <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <Image
                    src={session?.user.image}
                    width={37}
                    height={37}
                    alt={`${session?.user.name}'s Avatar`}
                  />
                </div>
              </label>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li>
                  <Link
                    onClick={() => signOut()}
                    href="#"
                  >
                    Sign Out
                  </Link>
                </li>
                {/* <li><a onClick={() => signOut()}>Logout</a></li> */}
              </ul>
            </div>
          </>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="btn btn-primary"
                >
                  Sign In
                </button>
              ))
            }
          </>
        )
        }

      </div>
    </div>
  )
}

export default Nav