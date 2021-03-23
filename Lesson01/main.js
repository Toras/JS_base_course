function getTc()
{
    let Tc = +document.getElementsByName('Tc')[0].value;
    let Tf = (9 / 5) * Tc + 32;
    document.getElementsByName('result1')[0].value = 'Tf=(9/5)*Tc+32=' + Tf + '\n'
}

let name = 'Василий';
let admin = name;
document.getElementsByName('result2')[0].value += admin;

//alert(admin);

//alert(1000 + '108')