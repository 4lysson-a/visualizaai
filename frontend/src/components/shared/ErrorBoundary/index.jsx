import React, { Component } from "react";

const ErrorPage = () => {
    const handleClick = () => {
        localStorage.clear();
        window.sessionStorage.clear();
        window.location.href = "/";
        window.location.reload();
    };

    return (
        <div className="h-screen w-full flex flex-col justify-between items-center p-10 bg-background">
            <h1 className="text-4xl font-bold">Sentimos muito, ocorreu um erro inesperado</h1>
            <p className="text-xl">
                Clique no botão abaixo para recarregar a página e tente novamente. Se o erro persistir
                <a href={import.meta.env.VITE_PHONE_NUMBER} className="underline text-primary">
                    {" "}
                    Entre em contato com o suporte
                </a>
                .
            </p>

            <button className="bg-card p-4 rounded-full" onClick={handleClick}>
                Clique aqui para recarregar a página
            </button>
        </div>
    );
};

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        // Atualiza o estado para que a próxima renderização mostre a UI alternativa
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Você também pode registrar o erro em um serviço de relatórios de erros
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <ErrorPage />;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
