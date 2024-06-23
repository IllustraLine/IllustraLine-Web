export default async function login() {
    const response = await fetch("https://");
    const data = await response.json();
    return data;
}