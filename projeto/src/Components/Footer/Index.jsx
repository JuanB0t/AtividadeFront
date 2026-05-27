import './style.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <p>
                &copy; {new Date().getFullYear()} - todos os direitos
                reservados
                <br />
                    SENAI - Bahia
            </p>
        </footer>
    )
}