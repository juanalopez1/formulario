async function main() {
    const result = await fetch(
        "https://localhost/backend/personas/verify",
        {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }
    );

    console.log(result);

    if (result.status === 401) {
        sessionStorage.setItem("aimPage", window.location);
        window.location.href = '/login';
    }
}

main();
