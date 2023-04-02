import EmailIcon from "../../icons/Email";
import "./style.scss";
import "./sizes.scss";
import "./radius.scss";
import "./variant.scss";

const TextComponent = function ({
    label = "",
    placeholder = "",
    description = "",
    error = "",
    disabled = false,
    withAsterisk = false,
    variant = "default",
    radius = "sm",
    size = "sm",
    name = "",
    type = "text",
    icon = "",
}) {
    return (
        <div
            className={
                "input-wrapper size-" + size + (icon ? " with-icon" : "")
            }
        >
            <label
                className="input-label"
                htmlFor="mantine-u5fxbw611"
                id="mantine-u5fxbw611-label"
            >
                {label}
                {withAsterisk && <span className="asterisk"> *</span>}
            </label>
            <div className="input-description">{description}</div>
            <div className={"textInput-wrapper"}>
                <div className="textInput-icon">{icon}</div>
                <input
                    disabled={disabled ? true : false}
                    className={
                        variant + " radius-" + radius + (error ? " error" : "")
                    }
                    type={type}
                    name={name}
                    placeholder={placeholder}
                />
            </div>
            <div className="error-caption">{error}</div>
        </div>
    );
};

export default TextComponent;
