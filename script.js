function pedirMusica(nomeMusica) {
    const seuTelefone = "5511987779277"; // Coloque seu número com DDD aqui (só números)
    const mensagem = encodeURIComponent(`Oi! Estou no seu show e queria ouvir a música: ${nomeMusica}`);
    const linkWhatsapp = `https://wa.me/${seuTelefone}?text=${mensagem}`;
    
    window.open(linkWhatsapp, '_blank');
}
