export const fetchProducts = async () => {
    try {
        const response = await fetch(`${process.env.BASE_URL}/api`, {
            cache: "force-cache",
        });

        if (!response.ok) {
            throw new Error(`Erro ao buscar produtos: ${response.status}`);
        }

        const data = await response.json();

        if (!data || !data.products) {
            console.error("Resposta da API não contém 'products'", data);
            return { products: [] };
        }

        return data;
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        return { products: [] };
    }
};
