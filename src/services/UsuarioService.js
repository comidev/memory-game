const ENDPOINT = "https://memory-gama-api.herokuapp.com/api/v0/users";

export const existsUsername = (username) => {
    return fetch(`${ENDPOINT}/${username}`).then((res) => {
        if (!res.ok) throw new Error("existsUsername is NOT ok!");
        return res.json();
    });
};

export const register = (user) => {
    return fetch(ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    }).then((res) => {
        if (!res.ok) throw new Error("register is NOT ok!");
        return res.json();
    });
};

export const getUsers = (user) => {
    return fetch(ENDPOINT).then((res) => {
        if (!res.ok) throw new Error("getUsers is NOT ok!");
        return res.json();
    });
};
