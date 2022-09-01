let name = prompt('ismingizni Kiriting?');
if (name == 'ozodbek' || name == 'OZODBEK' || name == 'ozodbek' || name =='Sohiba' || name == 'Shavvoz' || name == 'SHAVVOZ' || name == 'shavvoz' || name == 'Nodira' || name == 'nodira' || name == 'Mohinur' || name == 'Lobar' || name == 'mohinur' || name == 'shoxruh' || name == 'Shoxruh' || name == 'SHOXRUH' || name == 'oynura' || name == 'Oynura'  || name == 'OYNURA' || name == 'Oybek' || name == 'Nurbek' ) {
    let ism = document.getElementById('ism');
    ism.innerHTML = `<span style="color:blue; border:1px solid blue; paddiong:5px;">${name} Xush kelibsiz</span>`;
}
else {
    let ism = document.getElementById('ism');
    ism.innerHTML = `<span style="color:red;">${name}  Xato kiritingiz </span>`;
}