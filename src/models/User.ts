import postagem from "./Postagem";

interface User {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;
    postagem?: number | null | postagem;
}

export default User;