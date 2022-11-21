const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        "X-RapidAPI-Key": "ce6eacc692msh40748ab166b0190p1b9d9bjsnac93e00a5e41",
        "X-RapidAPI-Host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
    },
};

interface Fact {
    categories: string[];
    created_at: Date;
    icon_url: string;
    id: string;
    updated_at: Date;
    url: string;
    value: string;
}

export const getFact = async (): Promise<Fact> =>
    await fetch(
        "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random",
        options
    ).then((response) => response.json());
