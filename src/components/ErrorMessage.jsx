const ErrorMessage = ({message, Code, onClose}) =>{
    return(
        <div className="error-popup">
            <h3>Error {Code}</h3>
            <p>{message}</p>
            <button onClick={onClose}>Close</button>
        </div>
    )
}


export default ErrorMessage