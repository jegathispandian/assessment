import Link from 'next/link';

const Nav = () => {
    return(
        <div className="myNav">
            <img src="https://freedesignfile.com/upload/2014/02/Business-logos-14.jpg" alt="Girl in a jacket"  height="50"/>
            <Link href="/">
                <a>Home Page</a>
            </Link>
            <style jsx>{`
            a,
            img {
              padding: 10px;
            }`
            }

            </style>
        </div>
    )
}

export default Nav;