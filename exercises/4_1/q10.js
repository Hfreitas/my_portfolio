function lucroTotal(precoVenda, custoFixo) {
  const vendas = 1000;
  let imposto = 0.2 * precoVenda;
  let custoTotal = custoFixo + imposto;
  let lucro = (precoVenda - custoTotal) * vendas;
  {
    if (precoVenda >= 0 && custoFixo >= 0) {
      console.log('Lucro Total: R$ ' + lucro);
    } else {
      console.log('ERROR');
    }
  }
}
