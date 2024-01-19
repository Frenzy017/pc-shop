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

                    <div className="header__sort">
                        <select>
                            <option value="input">Sort by input order</option>
                            <option value="input">Sort by lowest price</option>
                            <option value="input">Sort by highest price</option>
                        </select>
                    </div>
                    <span className="header__total">Total: 2543$</span>
                    <span className="header__checkout u-margin-right-medium">Checkout</span>
                </div>
            </header>
        </>
    )
}

export default Header
