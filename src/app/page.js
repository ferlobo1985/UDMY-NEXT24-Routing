import Link from 'next/link'

export default function HomePage(){
    return(
        <>
            <h1>Home</h1>
            <ul>
                <li><Link href="/admins">Admins</Link></li>
                <li><Link href="/users">Users</Link></li>
            </ul>
        </>
    )
}