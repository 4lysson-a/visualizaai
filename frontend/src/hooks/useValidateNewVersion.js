const owner = "4lysson-a";
const repo = "visualizaai";

const url = `https://api.github.com/repos/${owner}/${repo}/releases/latest`;

export default function useValidateNewVersion() {
    const lastCheckDate = localStorage.getItem("lastCheckDate");
    const today = new Date().toISOString().split("T")[0];

    if (lastCheckDate === today) {
        return;
    }

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
            localStorage.setItem("lastCheckDate", today); // Update the last check date
            window.location.href = "/blog";
        })
        .catch(error => {
            console.error("Erro:", error);
        });
}
