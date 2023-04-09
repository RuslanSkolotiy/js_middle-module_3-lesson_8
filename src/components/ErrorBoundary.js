import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }
    static getDerivedStateFromError(error) {
        console.log("getDerivedStateFromError", error);
        return {
            hasError: true,
        };
    }

    componentDidCatch(error, errorInfo) {}

    render() {
        if (this.state.hasError) return <div>Что-то пошло не так!</div>;
        return this.props.children;
    }
}

export default ErrorBoundary;
