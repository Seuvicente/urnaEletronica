const botoes = document.querySelectorAll(".botao_numero");
const textoTela = document.querySelector(".texto_tela");
const telaUrna = document.querySelector(".tela_urna");
const imagemTela = document.createElement("img");
const botaoDeleta = document.querySelector("#delete");

botoes.forEach((botao) => {
  botao.addEventListener("click", (evento) => {
    if (evento.target.textContent === "Delete") {
      textoTela.textContent = "";
      imagemTela.setAttribute("src", "./imagens/branco.png");
      console.log(textoTela.textContent);
      return;
    }

    if(evento.target.textContent === "Confirma" && mete == true) {
      textoTela.textContent = "";
      imagemTela.setAttribute("src", "./imagens/check.png");
      botaoDeleta.textContent = "Volta";

      if (botaoDeleta.textContent == "Volta") {
        botaoDeleta.addEventListener("click", () => {
          textoTela.textContent = "";
          imagemTela.setAttribute("src", "./imagens/branco.png");
          botaoDeleta.textContent = "Delete";
        });
      }
    }

    if (textoTela.textContent.length >= 2) {
      return;
    }

    let codigo = evento.target.textContent;
    textoTela.textContent += codigo;
    console.log(textoTela.textContent);

    if (textoTela.textContent.length == 2) {
      if (textoTela.textContent === "10") {
        imagemTela.setAttribute("src", "./imagens/th.jfif");
        imagemTela.setAttribute("alt", "Vampeta");
        telaUrna.appendChild(imagemTela);
        textoTela.textContent = "Vampeta";
        return (mete = true);
      } else if (textoTela.textContent === "12") {
        imagemTela.setAttribute("src", "./imagens/goku.jfif");
        imagemTela.setAttribute("alt", "Goku");
        telaUrna.appendChild(imagemTela);
        textoTela.textContent = "Goku";
        return (mete = true);
      } else if (textoTela.textContent === "15") {
        imagemTela.setAttribute("src", "./imagens/defante.jfif");
        imagemTela.setAttribute("alt", "Defante");
        telaUrna.appendChild(imagemTela);
        textoTela.textContent = "Diogo Defante";
        return (mete = true);
      } else if (textoTela.textContent === "20") {
        imagemTela.setAttribute("src", "./imagens/agostinho.jfif");
        imagemTela.setAttribute("alt", "Agostinho");
        telaUrna.appendChild(imagemTela);
        textoTela.textContent = "Agostinho";
        return (mete = true);
      } else {
        
        return (mete = false);
      }
    }
  });
});
