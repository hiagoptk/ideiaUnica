const { default: Link } = require("next/link");

function Consultores() {

    return (
        <div>
            <h1>Consultores</h1>
            <Link href='/'><a>Home</a></Link>
        </div>
    )
}

export default Consultores