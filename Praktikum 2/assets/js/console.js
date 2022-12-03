// Tutup konsol
document.querySelector('#closeConsole').addEventListener('click', function() {
    document.querySelector('#console').style.display = 'none'
})

// Buka konsol
document.querySelector('.kata-console').addEventListener('click', function() {
    document.querySelector('#console').style.display = 'block'
})

// Bersihkan Konsol
document.querySelector('#clearConsole').addEventListener('click', function() {
    document.querySelector('#outputMessage').innerHTML = ''
})

// Kirim perintah konsol
document.querySelector('#submitConsole').addEventListener('click', function() {
    let inputConsole = document.querySelector('#inputConsole').value

    switch (inputConsole) {
        case 'help':
            rensponseConsole(`
            <p style="margin-bottom: 10px">Selamat datang di Q & A versi Konsol saya <br> kamu bisa tanya lewat perintah dibawah ini ya 👇</p>
            <ul style="padding-left: 15px">
                <li>
                    help
                    <ul style="padding-left: 25px">
                        <li>help</li>
                        <li>help versi</li>
                    </ul>
                </li>
                <li>
                    tanya
                    <ul style="padding-left: 25px">
                        <li>tanya tentang</li>
                        <li>tanya cita-cita</li>
                        <li>tanya umur</li>
                        <li>tanya ig</li>
                    </ul>
                </li>
                <li>about</li>
            </ul>
            `)
            break;
        case 'about':
            rensponseConsole(`<p>
                Hi, ini adalah profile cv saya, kamu bisa lihat-lihat perintah konsol ini dengan mengetik <i class="green">Help</i>
            </p>`)
            break;

        case 'help versi':
            rensponseConsole(`<p>Versi konsol ini sekarang adalah versi beta 0.1</p>`)
            break;
        case 'tanya':
            rensponseConsole(`<p>mau nanya apa?😄</p>`)
            break;
        case 'tanya tentang':
            rensponseConsole(`<p>Hai, saya Febry Billiyagi Saya seorang pengembang web dengan hasrat tinggi untuk mengembangkan ide menjadi kode yang dapat membantu banyak orang, dan selain coding dan belajar teknologi baru, saya juga menikmati bulu tangkis, membaca, minum teh, dan jogging.</p>`)
            break;
        case 'tanya cita-cita':
            rensponseConsole(`<p>Cita cita saya adalah menjadi Seorang Programmer yang handal dan ahli dalam keamanan sebuah kode dan jaringan software🌌🔒</p>`)
            break;
        case 'tanya umur':
            rensponseConsole(`<p>umur saya sekarang sudah hampir kepala 2 tapi masih dikurang 1🤩</p>`)
            break;
        case 'tanya ig':
            rensponseConsole(`Instagram: (@billiyagi) jangan lupa follow ya 😁`)
            break;
        case 'halo':
            rensponseConsole('Hi👋')
            break;
        case 'hi': 
            rensponseConsole('Halo👋')
            break;
        case 'p': 
            rensponseConsole('Hayo mau ngapain?')
            break;
        default:
            rensponseConsole('Perintah tidak ditemukan')
            break;
    }
    clearConsole();
    document.querySelector('#outputMessage').scrollTo(0,0)
})

// Kosongkan konsol
const clearConsole = () => {
    return document.querySelector('#inputConsole').value = ''
}

// Berikan respons pada konsol ketika perintah dikirim
const rensponseConsole = (responseHTML) => {
    const newElement = document.createElement('li')
    newElement.innerHTML = responseHTML
    return document.querySelector('#outputMessage').prepend(newElement)
}