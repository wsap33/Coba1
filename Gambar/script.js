// COUNTDOWN 24 JAM
const targetTime = new Date().getTime() + 24 * 60 * 60 * 1000;

setInterval(() => {
    const now = new Date().getTime();
    const distance = targetTime - now;

    const jam = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const menit = Math.floor((distance / (1000 * 60)) % 60);
    const detik = Math.floor((distance / 1000) % 60);

    document.getElementById("countdown").innerHTML =
        `${jam} Jam : ${menit} Menit : ${detik} Detik`;
}, 1000);

// FORM ORDER → WEB LINCAH
document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const data = {
        nama: this.nama.value,
        no_hp: this.no_hp.value,
        alamat: this.alamat.value
    };

    fetch("https://WEB-LINCAH-ANDA/api/order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(() => {
            fbq('track', 'Purchase', { value: 149000, currency: 'IDR' });
            ttq.track('CompletePayment');
            alert("Pesanan berhasil dikirim!");
            this.reset();
        })
        .catch(() => alert("Gagal mengirim pesanan"));
});