function Header() {
    return (
        <>
            <header className="header flex-center">
                <span>
                        <svg viewBox="0 0 1320 300">
                        <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                            PC Store
                        </text>
                    </svg>
                    </span>
                <div className="flex-end flex-gap-15 ">
                    <input className="header__input" type="text" placeholder="Search"/>
                    <span className="header__sort">Sort</span>
                    <span className="header__total">Total: 2543.00$</span>
                    <span className="header__checkout u-margin-right-medium">Checkout</span>
                </div>
            </header>
        </>
    )
}

export default Header
