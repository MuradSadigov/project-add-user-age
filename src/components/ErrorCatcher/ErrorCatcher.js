import "./ErrorCatcher.css";

const ErrorCatcher = (props) =>
{

    const clickHandler = () =>
    {
        props.errorSetter(false)
    }

    return (
        <div onClick={clickHandler} className="Error">
            <div className="Error-description">
                Input values are not valid.
            </div>
        </div>
    );
}


export default ErrorCatcher;