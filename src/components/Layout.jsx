export default function Layout(props) {

    const { children } = props

    const header = (
        <header>
            <h1 className="text-gradient">The Bodygram</h1>
            <p><strong>The 30 Simple Workout Program</strong></p>
        </header>
    )

    const footer = (
        <footer>
            <p>Build by <a href="https://www.Yancia.netlify.app" target="_blank">Yancia</a><br />Style with <a href="https://www.fantacss.smoljames.com" target="_blank">FantaCSS</a></p>
        </footer>
    
    )

    return (
        <>
            {header}
            {children}
            {footer}
        </>
    )
        
}