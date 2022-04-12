

const ml = document.getElementById("ml")
const ma = document.getElementById("ma")
const p = document.getElementById("p")
const pl = document.getElementById("pl")
const pa = document.getElementById("pa")
const j = document.getElementById("j")
const jl = document.getElementById("jl")
const ja = document.getElementById("ja")
const bt1 = document.getElementById("calc")
const bt2 = document.getElementById("limp")
const r = document.getElementById("rr")
const dm = document.getElementById("dm")
const rl = document.getElementById("rl")

bt2.addEventListener('click', limpar);

function limpar(){
    ml.value = "";
    ma.value= "";
    p.value= "";
    pl.value= "";
    pa.value= "";
    j.value= "";
    jl.value= "";
    ja.value= "";
    r.value= "";
    dm.value="";
    rl.value="";
}

bt1.addEventListener('click', () => {
    let mlar = Number(ml.value); //LARGURA DA PAREDE
    let mal = Number(ma.value); //ALTURA DA PAREDE
    let por = Number(p.value); //QNTD DE PORTAS
    let plar = Number(pl.value); //LARGURA DA PORTA
    let pal = Number(pa.value); //ALTURA DA PORTA
    let jan = Number(j.value); //QNTD DE JANELAS
    let jlar = Number(jl.value); //LARGURA DA JANELA
    let jal = Number(ja.value); //ALTURA DA JANELA
    let dmm = Number(dm.value);
    let renl = Number(rl.value);

    let aream = (mlar * mal);   //ÁREA DA PAREDE EM METROS QUADRADOS
    let tp = por* (plar * pal); //ÁREA DA PORTA      =         =
    let tj = jan* (jlar * jal); //ÁREA DA JANELA     =         =
    let mf = aream- (tp + tj);  //ÁREA TOTAL A SER PINTADA 
    let qd = (mf* dmm);
    let tt  = (aream* qd)/mf; 
    let ro  = ( tt/ renl);


    r.innerHTML = `<p> QUANTIDADE DE TINTA: ${tt.toFixed(1)}L <br></p>
    O RENDIMENTO DA LATA SERÁ: ${ro.toFixed(1)}L POR DEMÃO.`



});