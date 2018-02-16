(function(rows){
  let name, price, output = [];

  output.push('### ' + document.getElementById('set').value)
  output.push('');
  output.push('| Name | Price |');
  output.push('|------|-------|');

  rows.forEach(function(row){
    name = row.querySelector('div.productDetail > a').textContent;
    price = row.querySelector('.marketPrice .cellWrapper').innerText;
    output.push('| ' + name + ' | ' + price + ' |');
  });

  console.log(output.join("\n"));
})(document.querySelectorAll('.priceGuideTable tbody tr'));
