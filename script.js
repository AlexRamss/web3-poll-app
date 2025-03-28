async function connectWallet() {
    if (window.ethereum) {
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            console.log("Connected:", accounts[0]);
            document.getElementById('connectWallet').innerText = "Connected";
        } catch (error) {
            console.error("Wallet connection failed", error);
        }
    } else {
        alert("Please install MetaMask!");
    }
}

document.getElementById('connectWallet').addEventListener('click', connectWallet);