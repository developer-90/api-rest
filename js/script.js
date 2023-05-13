const url = 'https://www.el-tiempo.net/api/json/v2/provincias';
fetch(url)
  .then(response => response.json())
  .then(data => {
    const provincias = data.provincias;
    const tbody = document.querySelector('#tabla tbody');
    provincias.forEach(provincia => {
      const row = document.createElement('tr');
      const codprov = document.createElement('td');
      codprov.textContent = provincia.CODPROV;
      row.appendChild(codprov);

      const nomprov = document.createElement('td');
      nomprov.textContent = provincia.NOMBRE_PROVINCIA;
      row.appendChild(nomprov);

      const cod_ccaa = document.createElement('td');
      cod_ccaa.textContent = provincia.CODAUTON;
      row.appendChild(cod_ccaa);

      const ccaa = document.createElement('td');
      ccaa.textContent = provincia.COMUNIDAD_CIUDAD_AUTONOMA;
      row.appendChild(ccaa);

      const capital_prov = document.createElement('td');
      capital_prov.textContent = provincia.CAPITAL_PROVINCIA;
      row.appendChild(capital_prov);
      tbody.appendChild(row);
    });
  })
  .catch(error => console.error(error));
