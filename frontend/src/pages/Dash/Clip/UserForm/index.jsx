import React from "react";

import { NativeModal } from "@/components/shared/Modals";
import Separator from "@/components/shared/Separator";

export default function UserForm() {
    const input = React.useRef();

    const [open, setOpen] = React.useState({
        user_form: false,
        edit_message: false
    });
    const [edit, setEdit] = React.useState(false);

    const [message, setMessage] = React.useState("Olá, me chamo {nome} esta é uma mensagem de teste.");

    const handleClick = type => {
        switch (type) {
            case "open":
                setOpen(true);
                break;
            case "close":
                setOpen(false);
                break;
            default:
                setOpen(!open);
        }
    };

    const handleSave = () => {
        setMessage(input.current.value);
        setEdit(false);
    };

    return (
        <div className="flex flex-col gap-5 relative">
            <div className="flex flex-col gap-3">
                <h2 className="text-2xl">Formulário dos usuários</h2>
                <p className="text-[var(--texts)]">
                    Configure como os usuários vão te chamar no whatsapp customizando a mensagem.
                </p>
            </div>

            <button
                onClick={() => handleClick("open")}
                className="p-3 relative bg-[var(--card)] rounded-xl font-bold text-[var(--texts)] transition duration-200 text-center active:scale-95"
            >
                Customizar mensagem
            </button>

            {open && (
                <NativeModal key="user_form" onClose={() => handleClick("close")} isOpen={open}>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-4">
                                <h1 className="text-2xl mt-[-60px]">Gerenciar mensagem</h1>
                                <p className="text-xl">
                                    Personalize a mensagem que será enviada para os usuários, você pode usar a tag{" "}
                                    <span className="text-primary">{"{nome}"}</span> para inserir o nome do usuário.
                                </p>
                                <p className="text-sm">
                                    é importante que você mantenha a tag{" "}
                                    <span className="text-primary">{"{nome}"}</span> na mensagem para que o nome do
                                    usuário seja inserido corretamente.
                                </p>
                            </div>
                        </div>

                        <Separator />

                        <div className="flex flex-col gap-2">
                            <p className="opacity-50">Mensagem atual</p>
                            {edit ? (
                                <textarea
                                    ref={input}
                                    placeholder={message}
                                    className="bg-card rounded-xl text-texts p-6 text-xl"
                                ></textarea>
                            ) : (
                                <div className="bg-card rounded-xl text-texts p-6 text-xl">
                                    {message.split("{nome}").reduce((prev, curr, index) => {
                                        if (!index) return [curr];
                                        return prev.concat(
                                            <span key={index} style={{ color: "var(--primary)", fontWeight: "bold" }}>
                                                {"{nome}"}
                                            </span>,
                                            curr
                                        );
                                    }, [])}
                                </div>
                            )}
                        </div>

                        <div className="flex w-full items-center gap-4 pt-6 justify-between">
                            <button
                                onClick={handleSave}
                                className="bg-primary font-bold text-card p-4 w-full px-6 rounded-xl"
                            >
                                Salvar
                            </button>
                            <button
                                onClick={() => setEdit(!edit)}
                                className="bg-transparent border text-primary font-bold border-primary p-4 w-full px-6 rounded-xl"
                            >
                                Editar
                            </button>
                        </div>
                    </div>
                </NativeModal>
            )}
        </div>
    );
}
