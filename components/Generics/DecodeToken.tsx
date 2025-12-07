export interface JwtPayload {
  [key: string]: unknown;
  sub?: string;
  iat?: number;
  exp?: number;
}

/**
 * Extrai e decodifica os dados de um token JWT
 * @param token O token JWT a ser decodificado
 * @returns O payload decodificado ou null se o token for inválido
 */
export default function decodeJwtToken(token: string): JwtPayload | null {
  try {
    if (!token || token.split(".").length !== 3) {
      return null;
    }

    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");

    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload) as JwtPayload;
  } catch (error) {
    console.error("Erro ao decodificar JWT:", error);
    return null;
  }
}

export function extractData({ token }: { token: string }) {
  const data = decodeJwtToken(token);

  if (typeof data === "object" && data !== null) {
    if (
      "id" in data &&
      typeof data["id"] === "string" &&
      "email" in data &&
      typeof data["email"] === "string" &&
      "username" in data &&
      typeof data["username"] === "string" &&
      "is_active" in data &&
      typeof data["is_active"] === "boolean"
    ) {
      return {
        id: data["id"],
        email: data["email"],
        username: data["username"],
        is_active: data["is_active"],
      };
    } else {
      throw new Error("Dados do token inválidos");
    }
  }
}
