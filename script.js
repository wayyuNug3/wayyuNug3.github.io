let nama = document.querySelector('#nama');
let pesan = document.querySelector('#pesan');
let btnKirim = document.querySelector('#btnKirim');
let number = '+6285323101603';

btnKirim.addEventListener('click', function(){
    window.location.href = 'https://api.whatsapp.com/send?phone=' + number + '&text=%20Nama : '+ nama.value + '%0D%0APesan : ' + pesan.value;
})

