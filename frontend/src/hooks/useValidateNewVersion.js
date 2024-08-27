// Defina o nome do dono e do repositório
const owner = "4lysson-a";
const repo = "visualizaai";

// URL da API para a última release
const url = `https://api.github.com/repos/${owner}/${repo}/releases/latest`;

export default function useValidateNewVersion() {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao obter a última release: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            const currentVersion = localStorage.getItem("latestVersion");
            if (currentVersion === data.tag_name) return;

            const tag = data.tag_name;
            localStorage.setItem("latestVersion", tag);
            window.location.href = "/blog";
        })
        .catch(error => {
            console.error("Erro:", error);
        });
}
