# Classificador visual de dígitos

Dígitos 0–9 e sequências de até oito dígitos separados, com inferência local no navegador.

Easter egg experimental: escrever NEO ou neo com letras claras e separadas no modo Sequência.
O terceiro carácter redondo só é interpretado como O depois de N e E.
Letras ligadas, ruído e escrita livre podem impedir o reconhecimento.

Os pesos numéricos são digits-cnn-v6. Pontuações reais, sem alterações por nome
ou caso; valores a partir de 0,999 são apresentados como ≥99,9%.

Este repositório contém apenas o pacote público de execução.

Avaliação de texto impresso limpo: 424/480 sequências NEO reconhecidas (88,33%),
0/1000 ativações em números e 0/240 em controlos. A meta de 95% não foi atingida;
a funcionalidade experimental tem limitações e não constitui OCR geral.
