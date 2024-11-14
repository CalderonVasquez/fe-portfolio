import './Navigation.css';

const Navigation = () => {
    return (
        <header className='header'>
            <nav>
                <ul className='top-nav'>
                    <div className='nav-logo'>
                        <a href='#'>
                            <p className='name-logo'>adamkeyes</p>
                        </a>
                    </div>
                    <div className='nav-links'>
                        <li>
                            <a href='#'>
                                <img src="/images/icon-github.svg" alt='Github Icon'/>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <img src="/images/icon-frontend-mentor.svg" alt='Frontend Mentor Icon' />
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <img src="/images/icon-linkedin.svg" alt='Linkedin Icon' />
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <img src="/images/icon-twitter.svg" alt='Twitter Icon' />
                            </a>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;