import Lottie from "lottie-react";
import React, { Component } from "react";
import errorLottie from "@/assets/animations/error.json";

const phone = "5512936180956";

const ErrorPage = () => {
    const handleClick = () => {
        localStorage.clear();
        window.sessionStorage.clear();
        window.location.href = "/";
        window.location.reload();
    };

    return (
        <div className="flex items-center justify-center">
            <div className="h-full max-w-[500px] w-full flex flex-col gap-10 justify-between items-center p-10 bg-background">
                {errorLottie && <Lottie animationData={errorLottie} />}

                <h1 className="text-4xl font-bold">Sentimos muito, ocorreu um erro inesperado</h1>
                <p className="text-xl">
                    Clique no botão abaixo para recarregar a página e tente novamente. Se o erro persistir{" "}
                    <a href={`https://api.whatsapp.com/send?phone=${phone}`} className="underline text-primary">
                        Entre em contato com o suporte.
                    </a>
                </p>

                <button
                    className="w-full bg-card font-bold text-xl p-4 rounded-full active:scale-90 transition-all active:bg-primary active:text-background"
                    onClick={handleClick}
                >
                    Recarregar
                </button>
            </div>
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